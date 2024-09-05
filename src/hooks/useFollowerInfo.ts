import kyInstance from "@/lib/ky";
import { FollowerrInfo } from "@/lib/types";
import { useQuery } from "@tanstack/react-query";

export default function useFollowerInfo(userId: string, initialState:  FollowerrInfo) {
    const query = useQuery({
        queryKey: ["follower-info", userId],
        queryFn: () => kyInstance.get(`/api/user/${userId}/followers`).json<FollowerrInfo>(),
        initialData: initialState,
        staleTime: Infinity,
    })

    return query;
}