import React from "react";
import { useQuery } from "@tanstack/react-query";
import Skeleton from "react-loading-skeleton";
import { getTradeAssociation } from "../../services/resourcesApi";
import { Link } from "react-router-dom";

const TradeAssociations = () => {
  const {
    data: trade,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["trade"],
    queryFn: getTradeAssociation,
    gcTime: 180000,
  });

  // Error handling
  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  // Check if the data is available and correctly formatted
  // const trade = response;

  return (
    <div>
      {isLoading ? (
        <Skeleton height={120} count={4} />
      ) : (
        <div className="world-box">
          {trade ? (
            // Iterate over each letter group (A, B, C, ..., Z)
            Object.keys(trade).map((letter) => (
              <div key={letter}>
                <h2>{letter}</h2>
                <ul>
                  {trade[letter]?.map((item) => (
                    <li key={item.id} style={{marginBottom:"6px"}}>
                      <Link to={`/trade-associations/${item.slug}`}>
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))
          ) : (
            <div>No trade associations found.</div>
          )}
        </div>
      )}
    </div>
  );
};

export default TradeAssociations;
