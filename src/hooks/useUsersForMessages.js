// hooks/useUsersForMessages.js
import { useQuery } from "@tanstack/react-query";
import { getAllUsersForMsg } from "../services/dashboardMemberApi ";

export default function useUsersForMessages(member_id, enabled = true) {
  return useQuery({
    queryKey: ["usersForMessages", member_id],
    queryFn: () => getAllUsersForMsg(member_id),
    refetchInterval: 15000,
    enabled: enabled && !!member_id,
  });
}
