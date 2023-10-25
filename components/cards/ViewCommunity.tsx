"use client"

import Image from "next/image";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

interface Props {
    id: string;
    name: string;
    username: string;
    imgUrl: string;
    personType: string;
}

const ViewCommunity = ({ id, name, username, imgUrl, personType }: Props) => {
    const router = useRouter();
  
    return (
    <article className="user-card">
        <div className="user-card_avatar">
            <Image 
                src={imgUrl}
                alt="logo"
                width={48}
                height={48}
                className="rounded-full"
            />

            <div className="flex-1 text-ellipsis">
                <h4 className="text-base-semibold text-light-1">{name}</h4>
                <h4 className="text-small-medium text-gray-1">@{username}</h4>
            </div>
        </div>
        <Button className="user-card_btn" onClick={() => router.push(`/communities/${id}`)}> 
            View
        </Button>
    </article>
  ) 
}

export default ViewCommunity;