import { useQuery } from "@tanstack/react-query";
import { fetchCompanyOverview } from "../api/CompanyDetailsApi";
import { fetchTimeSeriesDaily } from "../api/timeSeriesDailyApi";

export const useTimeSeriesDaily = (symbol: string) => {
  return useQuery({
    queryKey: ["timeSeriesDaily", symbol],
    queryFn: () => fetchTimeSeriesDaily(symbol),
    staleTime: 1000 * 60 * 5, // cache 5 mins
  });
}