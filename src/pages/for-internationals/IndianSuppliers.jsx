import React, { useEffect, useMemo, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import {
  getCityList,
  getProductPanelList,
  getStateList,
  postCityList,
  postCompanyList,
  postHsCodeList,
  postProductList,
  postProductPanelList,
  postRegionList,
  postStateList,
} from "../../services/internationalApi";
import { useQuery, useMutation } from "@tanstack/react-query";
import Skeleton from "react-loading-skeleton";
import "./supplier.css";
import { DataTableCustom, TableWithModal } from "../../components";

const IndianSuppliers = () => {
  const [searchBy, setSearchBy] = useState("product-panel");
  const [selectedPanel, setSelectedPanel] = useState(null);
  const [selectedAlphabet, setSelectedAlphabet] = useState(null);
  const [modalContent, setModalContent] = useState({});
  const [openModal, setOpenModal] = useState(false);
  const [columns, setColumns] = useState([]);
  const [data, setData] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    watch,
    reset,
  } = useForm({
    mode: "onChange",
  });

  const {
    data: panelList,
    isPanelListLoading,
    isPanelListError,
    panelListError,
  } = useQuery({
    queryKey: ["panelList"],
    queryFn: getProductPanelList,
    cacheTime: 180000,
  });

  const {
    data: stateList,
    isStateListLoading,
    isStateListError,
    stateListError,
  } = useQuery({
    queryKey: ["stateList"],
    queryFn: getStateList,
    cacheTime: 180000,
  });

  const {
    data: cityList,
    isCityListLoading,
    isCityListError,
    cityListError,
  } = useQuery({
    queryKey: ["cityList"],
    queryFn: getCityList,
    cacheTime: 180000,
  });

  // Search by regions for react-select
  const regionList = [
    { value: "eastern", label: "Eastern" },
    { value: "western", label: "Western" },
    { value: "northern", label: "Northern" },
    { value: "southern", label: "Southern" },
  ];

  const commonColumns = useMemo(
    () => [
      {
        name: "Organization Name",
        selector: (row) => row.Organization_Name,
        cell: (row) => row.Organization_Name,
        sortable: true,
      },
      {
        name: "Type of Organization",
        selector: (row) => row.Organization_Type,
        cell: (row) => row.Organization_Type,
        sortable: true,
      },
      {
        name: "Address",
        selector: (row) => row.Address,
        cell: (row) => row.Address,
        sortable: true,
      },
      {
        name: "State",
        selector: (row) => row.State,
        cell: (row) => row.State,
        sortable: true,
      },
      {
        name: "City",
        selector: (row) => row.City,
        cell: (row) => row.City,
        sortable: true,
      },
      {
        name: "Website",
        selector: (row) => row.Website,
        cell: (row) =>
          row.Website ? (
            <a
              href={
                row.Website.startsWith("http")
                  ? row.Website
                  : `https://${row.Website}`
              }
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "blue", textDecoration: "underline" }}
            >
              {row.Website}
            </a>
          ) : (
            "-"
          ),
        sortable: true,
      },
      {
        name: "View",
        cell: (row) => (
          <button
            className="btn"
            style={{
              backgroundColor: "#1a83c6",
              color: "#fff",
              justifyContent: "left",
            }}
            onClick={() => handleOpenModal(row)}
          >
            View
          </button>
        ),
        ignoreRowClick: true,
        button: true,
      },
    ],
    []
  );

  // Panel List Mutation
  const postProductPanelListMutation = useMutation({
    mutationFn: postProductPanelList,
    onSuccess: (data) => {
      setColumns(commonColumns);
      setData(data);
    },
    onError: (error) => {
      console.error("Product Panel search failed:", error);
    },
  });
  // Product List Mutation
  const postProductListMutation = useMutation({
    mutationFn: postProductList,
    onSuccess: (data) => {
      setColumns(commonColumns);
      setData(data);
    },
    onError: (error) => {
      console.error("Product wise search failed:", error);
    },
  });

  // HS Code Mutation
  const postHsCodeMutation = useMutation({
    mutationFn: postHsCodeList,
    onSuccess: (data) => {
      setColumns(commonColumns);
      setData(data);
    },
    onError: (error) => {
      console.error("HS Code search failed:", error);
    },
  });
  // Company Mutation
  const postCompanyMutation = useMutation({
    mutationFn: postCompanyList,
    onSuccess: (data) => {
      setColumns(commonColumns);
      setData(data);
    },
    onError: (error) => {
      console.error("HS Code search failed:", error);
    },
  });
  // Region Mutation
  const postRegionMutation = useMutation({
    mutationFn: postRegionList,
    onSuccess: (data) => {
      setColumns(commonColumns);
      setData(data);
    },
    onError: (error) => {
      console.error("HS Code search failed:", error);
    },
  });
  // State Mutation
  const postStateMutation = useMutation({
    mutationFn: postStateList,
    onSuccess: (data) => {
      setColumns(commonColumns);
      setData(data);
    },
    onError: (error) => {
      console.error("State search failed:", error);
    },
  });
  // City Mutation
  const postCityMutation = useMutation({
    mutationFn: postCityList,
    onSuccess: (data) => {
      setColumns(commonColumns);
      setData(data);
    },
    onError: (error) => {
      console.error("City search failed:", error);
    },
  });

  const handleOpenModal = (row) => {
    setModalContent({
      Organization_Name: row.Organization_Name,
      Address: row.Address,
      State: row.State,
      City: row.City,
      Pin: row.PIN || "",
      E_Mail: row.E_Mail,
      ...(row.Website ? { Website: row.Website } : {}),
    });

    setOpenModal(true); // Open the modal
  };

  const handleCloseModal = () => {
    setOpenModal(false); // Close the modal
  };

  // Search by options for react-select
  const searchByOptions = [
    { value: "product-panel", label: "Product Panel" },
    { value: "product-wise", label: "Product" },
    { value: "hs-code-wise", label: "HS Code" },
    { value: "company-wise", label: "Company" },
    { value: "region-wise", label: "Region" },
    { value: "state-wise", label: "State" },
    { value: "city-wise", label: "City" },
  ];

  const commonSortBy = "eepc_ref_no";

  // Function to render form fields based on the selected search by
  const renderFormFields = () => {
    switch (searchBy) {
      case "product-panel":
        return (
          <>
            {isPanelListError ? (
              <p>Error: {panelListError?.message || "Something went wrong!"}</p>
            ) : (
              <Controller
                name="productPanel"
                control={control}
                render={({ field }) =>
                  isPanelListLoading ? (
                    <Skeleton />
                  ) : (
                    <Select
                      {...field}
                      options={panelList?.map((panelItem) => ({
                        value: panelItem?.Primary_Panel_Code,
                        // label: panelItem?.Primary_Panel_Code,
                        label: `${panelItem?.Primary_Panel_Code} (${panelItem?.Panel_Description})`,
                      }))}
                      onChange={(selectedOption) => {
                        field.onChange(selectedOption);
                        setSelectedPanel(selectedOption);
                      }}
                      placeholder="Select Product Panel"
                      isSearchable
                      className={`react-select ${
                        errors.productPanel ? "is-invalid" : ""
                      }`}
                    />
                  )
                }
              />
            )}
          </>
        );
      case "product-wise":
        return (
          <input
            type="text"
            name="productWise"
            id="productWise"
            placeholder="Enter Product Name"
            {...register("productWise", { required: "This field is required" })}
          />
        );
      case "hs-code-wise":
        return (
          <input
            type="text"
            name="hsCodeWise"
            id="hsCodeWise"
            placeholder="Enter HS Code Wise"
            {...register("hsCodeWise", { required: "This field is required" })}
          />
        );
      case "company-wise":
        return (
          <input
            type="text"
            name="companyWise"
            id="companyWise"
            placeholder="Enter Company Name"
            {...register("companyWise", { required: "This field is required" })}
          />
        );
      case "region-wise":
        return (
          <>
            <Controller
              name="regionWise"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  options={regionList}
                  onChange={(regionOption) => {
                    field.onChange(regionOption);
                    // setSelectedAlphabet(null); // Reset selected alphabet for region search
                  }}
                  placeholder="Select Region"
                  isSearchable
                  className={`react-select ${
                    errors.regionWise ? "is-invalid" : ""
                  }`}
                />
              )}
            />
          </>
        );
      case "state-wise":
        return (
          <>
            {isStateListError ? (
              <p>Error: {stateListError?.message || "Something went wrong!"}</p>
            ) : (
              <Controller
                name="stateWise"
                control={control}
                render={({ field }) =>
                  isStateListLoading ? (
                    <Skeleton />
                  ) : (
                    <Select
                      {...field}
                      options={stateList?.map((stateItem) => ({
                        value: stateItem?.State,
                        label: stateItem?.State,
                      }))}
                      onChange={(selectedOption) => {
                        field.onChange(selectedOption);
                        // setSelectedPanel(selectedOption);
                      }}
                      placeholder="Select State"
                      isSearchable
                      className={`react-select ${
                        errors.stateListError ? "is-invalid" : ""
                      }`}
                    />
                  )
                }
              />
            )}
          </>
        );
      case "city-wise":
        return (
          <>
            {isCityListError ? (
              <p>Error: {cityListError?.message || "Something went wrong!"}</p>
            ) : (
              <Controller
                name="cityWise"
                control={control}
                render={({ field }) =>
                  isCityListLoading ? (
                    <Skeleton />
                  ) : (
                    <Select
                      {...field}
                      options={cityList?.map((cityItem) => ({
                        value: cityItem?.City,
                        label: cityItem?.City,
                      }))}
                      onChange={(selectedOption) => {
                        field.onChange(selectedOption);
                        // setSelectedPanel(selectedOption);
                      }}
                      placeholder="Select city"
                      isSearchable
                      className={`react-select ${
                        errors.cityListError ? "is-invalid" : ""
                      }`}
                    />
                  )
                }
              />
            )}
          </>
        );
      default:
        return null;
    }
  };

  // Alphabet options All & A-Z
  const alphabetOptions = useMemo(
    () => [
      { value: "All", label: "All" },
      ...Array.from({ length: 26 }, (_, i) => ({
        value: String.fromCharCode(97 + i),
        label: String.fromCharCode(65 + i),
      })),
    ],
    []
  );

  // Handle form submission
  const onSubmit = async (formData) => {
    try {
      setHasSearched(true);

      const basePayload = {
        selectedAlphabet: formData.alphabet?.value || undefined,
      };

      switch (searchBy) {
        case "product-panel":
          postProductPanelListMutation.mutate({
            productPanel: formData.productPanel?.value,
            ...basePayload,
          });
          break;

        case "product-wise":
          postProductListMutation.mutate({
            productWise: formData.productWise,
            ...basePayload,
          });
          break;

        case "hs-code-wise":
          postHsCodeMutation.mutate({
            hsCodeWise: formData.hsCodeWise,
            ...basePayload,
          });
          break;

        case "company-wise":
          postCompanyMutation.mutate({
            companyWise: formData.companyWise,
            ...basePayload,
          });
          break;

        case "region-wise":
          postRegionMutation.mutate({
            regionWise: formData.regionWise?.value,
            ...basePayload,
          });
          break;

        case "state-wise":
          postStateMutation.mutate({
            stateWise: formData.stateWise?.value,
            ...basePayload,
          });
          break;

        case "city-wise":
          postCityMutation.mutate({
            cityWise: formData.cityWise?.value,
            ...basePayload,
          });
          break;

        default:
          throw new Error("Invalid searchBy option");
      }
    } catch (error) {
      console.error("Error during form submission:", error);
      toast.error("Something went wrong while searching. Please try again.");
    }
  };

  // Handle Search By change
  const handleSearchBy = (selectedOption) => {
    setSearchBy(selectedOption?.value);
    reset({
      alphabet: null,
      productPanel: null,
      productWise: "",
      hsCodeWise: "",
      companyWise: "",
      regionWise: null,
      stateWise: null,
      cityWise: null,
    });
  };

  // Watch selected fields to dynamically enable/disable the search button
  const formValues = watch();

  // Whenever any form field changes, reset the 'hasSearched' state
  useEffect(() => {
    setHasSearched(false);
  }, [
    formValues.productPanel,
    formValues.productWise,
    formValues.hsCodeWise,
    formValues.companyWise,
    formValues.regionWise,
    formValues.stateWise,
    formValues.cityWise,
    formValues.alphabet,
  ]);

  // Determine if the search button should be enabled
  const isSearchButtonEnabled = () => {
    const requiredFieldsMap = {
      "product-panel": formValues.productPanel?.value,
      "product-wise": formValues.productWise?.trim(),
      "hs-code-wise": formValues.hsCodeWise?.trim(),
      "company-wise": formValues.companyWise?.trim(),
      "region-wise": formValues.regionWise?.value,
      "state-wise": formValues.stateWise?.value,
      "city-wise": formValues.cityWise?.value,
    };

    return Boolean(requiredFieldsMap[searchBy]);
  };

  const isTableLoading =
    postProductPanelListMutation.isLoading ||
    postProductListMutation.isLoading ||
    postHsCodeMutation.isLoading ||
    postCompanyMutation.isLoading ||
    postRegionMutation.isLoading ||
    postStateMutation.isLoading ||
    postCityMutation.isLoading;

  const isTableError =
    postProductPanelListMutation.isError ||
    postProductListMutation.isError ||
    postHsCodeMutation.isError ||
    postCompanyMutation.isError ||
    postRegionMutation.isError ||
    postStateMutation.isError ||
    postCityMutation.isError;

  const tableError =
    postProductPanelListMutation.error ||
    postProductListMutation.error ||
    postHsCodeMutation.error ||
    postCompanyMutation.error ||
    postRegionMutation.error ||
    postStateMutation.error ||
    postCityMutation.error;

  return (
    <div className="supplier-container">
      <div className="row align-items-center mb-5">
        <div className="col-lg-2">
          <p className="">
            <b>Search By</b>
          </p>
        </div>
        <div className="col-lg-3">
          <Controller
            name="searchBy"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                options={searchByOptions}
                onChange={(selectedOption) => {
                  field.onChange(selectedOption);
                  handleSearchBy(selectedOption);
                }}
                value={searchByOptions.find(
                  (option) => option.value === searchBy
                )}
                placeholder="Select Search By"
                isSearchable
              />
            )}
          />
        </div>
        <div className="col-lg-7">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="row align-items-center"
          >
            <div className="col-lg-5">{renderFormFields()}</div>
            <div className="col-lg-5">
              <Controller
                name="alphabet"
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={alphabetOptions}
                    onChange={(selectedOption) => {
                      field.onChange(selectedOption);
                      setSelectedAlphabet(selectedOption);
                    }}
                    placeholder="Select Alphabet"
                    isSearchable
                  />
                )}
              />
            </div>
            <div className="col-lg-2" style={{ marginTop: "8px" }}>
              <button
                type="submit"
                className="btn"
                disabled={
                  !isSearchButtonEnabled() || isSubmitting || isTableLoading
                }
              >
                {isTableLoading ? "Searching..." : "Search"}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Table Section */}
      {isTableLoading ? (
        <Skeleton height={400} />
      ) : isTableError ? (
        <div className="message-container">
          <p className="text-danger">An error occurred. Please try again.</p>
        </div>
      ) : hasSearched ? (
        data.length > 0 ? (
          <DataTableCustom
            title=""
            data={data || []}
            columns={columns}
            defaultSortBy={commonSortBy}
            onModalOpen={handleOpenModal}
            handleCloseModal={handleCloseModal}
            modalContent={modalContent}
            openModal={openModal}
          />
        ) : (
          <div className="message-container">
            <p className="text-muted">No suppliers found for this search.</p>
          </div>
        )
      ) : (
        <div className="message-container">
          <p className="text-muted">
            Please fill all the form fields and hit Search to view results.
          </p>
        </div>
      )}
    </div>
  );
};

export default IndianSuppliers;
