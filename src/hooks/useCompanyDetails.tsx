import { useQuery } from "@tanstack/react-query";
import { fetchCompanyOverview } from "../api/CompanyDetailsApi";

export const useCompanyDetails = (symbol: string) => {
  return useQuery({
    queryKey: ["companyOverview", symbol],
    queryFn: () => fetchCompanyOverview(symbol),
    staleTime: 1000 * 60 * 5, // cache 5 mins
  });
}