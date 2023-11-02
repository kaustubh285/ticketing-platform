"use client";

import getBasePath from "@/lib/getBasePathcomponents";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {
  id: string;
};
function DeleteBlock({ id }: Props) {
  const router = useRouter();
  const deleteTicket = async () => {
    const res = await fetch(`${getBasePath()}/api/Tickets/${id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      router.refresh();
    }
  };
  return (
    <FontAwesomeIcon
      icon={faX}
      className='text-red-400 cursor-pointer hover:text-red-200 '
      onClick={deleteTicket}
    />
  );
}

export default DeleteBlock;
