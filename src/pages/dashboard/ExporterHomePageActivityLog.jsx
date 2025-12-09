import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useMemo, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { getExporterActivityLog } from "../../services/dashboardMemberApi ";
import { DataTableCustom } from "../../components";

const ExporterHomePageActivityLog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [addressMap, setAddressMap] = useState({});

  const { user, loading, error } = useAuth();
  if (error) return <div>Error: {error}</div>; // Show any authentication errors

  const member_id = user?.member_id;
  console.log("mmid", member_id);
  // "3106"

  const {
    data: exporterProfile,
    isLoading,
    isError,
    error: profileError,
  } = useQuery({
    queryKey: ["exporter-activity-log", member_id],
    queryFn: () => getExporterActivityLog(member_id),
  });

  const addressCache = new Map();

  const getAddressFromLatLong = async (lat, lon) => {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`,
      {
        headers: {
          "User-Agent": "https://eepc-exporter-home-page.vercel.app/", // Replace with actual app name/domain
        },
      }
    );
    const data = await response.json();
    return data.display_name || `(${lat}, ${lon})`;
  };

  useEffect(() => {
    const resolveAddresses = async () => {
      const newMap = { ...addressMap };
      const promises = [];

      exporterProfile?.forEach((item) => {
        const latArray = JSON.parse(item.user_lattitude || "[]");
        const lngArray = JSON.parse(item.user_longitude || "[]");

        latArray.forEach((lat, idx) => {
          const lon = lngArray[idx];
          const key = `${lat},${lon}`;

          if (!newMap[key]) {
            const p = getAddressFromLatLong(lat, lon).then((addr) => {
              newMap[key] = addr;
            });
            promises.push(p);
          }
        });
      });

      await Promise.all(promises);
      setAddressMap(newMap);
    };

    if (exporterProfile?.length) {
      resolveAddresses();
    }
  }, [exporterProfile]);

  console.log("exporter pro data", exporterProfile);
  const filteredData = useMemo(() => {
    return exporterProfile?.filter((item) => {
      const searchLowerCase = searchTerm.toLowerCase();

      const latArray = JSON.parse(item.user_lattitude || "[]");
      const lngArray = JSON.parse(item.user_longitude || "[]");
      const addresses = latArray.map(
        (lat, idx) => `Lat: ${lat}, Lng: ${lngArray[idx]}`
      );

      return (
        item.user_name.toLowerCase().includes(searchLowerCase) ||
        item.user_email.toLowerCase().includes(searchLowerCase) ||
        item.user_phone.toLowerCase().includes(searchLowerCase) ||
        addresses.some((addr) => addr.toLowerCase().includes(searchLowerCase))
      );
    });
  }, [exporterProfile, searchTerm]);

  const columns = [
    {
      name: "Sl. No.",
      // use the index instead of sl_no
      cell: (row, index) => index + 1,
      sortable: false, // since this is derived, sorting doesn't make sense
      width: "11%",
    },

    {
      name: "Visiter Name",
      selector: (row) => row.user_name,
      sortable: true,
    },
    {
      name: "Visiter Email",
      selector: (row) => row.user_email,
      sortable: true,
    },
    {
      name: "Visiter Phone",
      selector: (row) => row.user_phone,
      sortable: true,
    },
    {
      name: "Visit time(s)",
      selector: (row) => row.user_visit_count,
      sortable: true,
    },
    {
      name: "Visitor Address",
      cell: (row) => (
        <ul style={{ paddingLeft: "20px" }}>
          {row.user_address.map((addr, i) => (
            <li key={i}>{addr}</li>
          ))}
        </ul>
      ),
      sortable: false,
    },
  ];

  const data = useMemo(() => {
    return (
      filteredData?.map((item) => {
        const latArray = JSON.parse(item.user_lattitude || "[]");
        const lngArray = JSON.parse(item.user_longitude || "[]");

        const user_address = latArray.map((lat, idx) => {
          const lng = lngArray[idx];
          const key = `${lat},${lng}`;
          return addressMap[key] || `Loading address for (${lat}, ${lng})`;
        });

        return {
          user_name: item.user_name,
          user_email: item.user_email,
          user_phone: item.user_phone,
          user_visit_count: item.user_visit_count,
          user_address,
          url: item.url,
          member_id: item.member_id,
        };
      }) || []
    );
  }, [filteredData, addressMap]);

  const commonSearchFields = [
    "sl_no",
    "user_name",
    "user_email",
    "user_phone",
    "user_address",
    "user_visit_count",
  ];
  const commonSortBy = "sl_no";
  return (
    <div>
      {" "}
      <DataTableCustom
        title="Exporter Home Page Activity LOg"
        data={data || []}
        columns={columns}
        searchFields={commonSearchFields}
        defaultSortBy={commonSortBy}
      />
    </div>
  );
};

export default ExporterHomePageActivityLog;
