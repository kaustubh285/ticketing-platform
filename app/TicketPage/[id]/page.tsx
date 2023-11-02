import TicketForm from "@/components/TicketFormcomponents";
import getBasePath from "@/lib/getBasePathcomponents";
import React, { useState } from "react";

type Props = {
  params: {
    id: string;
  };
};

type ApiData = {
  ticket: TicketData;
};

const getTicketById = async (id: string) => {
  try {
    const res = await fetch(`${getBasePath()}/api/Tickets/${id}`, {
      cache: "no-cache",
    });

    if (!res.ok) {
      throw new Error("could not fetch");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

async function TicketPage({ params: { id } }: Props) {
  const EDITMODE = id !== "new";
  let updateTicketData;

  if (EDITMODE) {
    let data = await getTicketById(id);
    updateTicketData = data.ticket;
  }
  return (
    // <div>
    <TicketForm ticket={updateTicketData} />
    // </div>
  );
}

export default TicketPage;
