import { useQuery } from "@tanstack/react-query";
import { fetchTopMovers } from "../api/StockApi";

export const useStocksQuery = () => {
  return useQuery({
    queryKey: ["topMovers"],
    queryFn: fetchTopMovers,
    staleTime: 1000 * 60 * 5, // cache 5 mins
  });
};
