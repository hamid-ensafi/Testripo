import { fetchTickets } from "@/service/apiFetchTickets";
import { ITicket } from "@/types/feature/ManageTickets/ManageTickets.interface";
import { keepPreviousData, useQuery, UseQueryResult } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

export function useGetTickets() {
  const [search,] = useSearchParams();
  const {
    data: Tickets,
    isLoading,
    error,
  }: UseQueryResult<ITicket, Error> = useQuery({
    queryKey: ["Tickets",search.get('ordering')],
    queryFn: () => fetchTickets(search.get('ordering')),
    staleTime: 60 * 1000,
    placeholderData:keepPreviousData
  });
  return { Tickets, error, isLoading };
}
