import { useQuery } from "@tanstack/react-query";
import { fetchSearchStocks } from "../api/searchStockApi";

export const useSearchStock = (keywords: string) => {
  return useQuery({
    queryKey: ["searchStock", keywords],
    queryFn: () => fetchSearchStocks(keywords),
    enabled: keywords.length > 0,
    staleTime: 1000 * 60 * 5, // cache 5 mins
  });
}