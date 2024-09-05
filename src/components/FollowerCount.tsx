"use client"

import useFollowerInfo from "@/hooks/useFollowerInfo";
import { FollowerrInfo } from "@/lib/types";
import { formatNumber } from "@/lib/utils";

interface FollowerCountProps {
    userId: string,
    initialState: FollowerrInfo
}

export default function FolllowerCount({userId, initialState} : FollowerCountProps) {

    const {data} = useFollowerInfo(userId, initialState);

    return (
        <span>
            Followers: {" "}
            <span className="font-semibold">
                {formatNumber(data.followers)}
            </span>
        </span>
    )
}