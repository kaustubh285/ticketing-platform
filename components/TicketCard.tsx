import React from "react";
import DeleteBlock from "./DeleteBlock";
import PriorityDisplay from "./PriorityDisplay";
import Progressbar from "./Progressbar";
import StatusDisplay from "./StatusDisplay";
import Ticket from "@/models/Ticketcomponents";
import { formatDateTime } from "@/lib/getBasePathcomponents";
import Link from "next/link";

type Props = {
  id: number;
  ticket: TicketData;
};

function TicketCard({ id, ticket }: Props) {
  return (
    <div className='flex flex-col bg-card hover:bg-card-hover rounded-md shadow-lg p-3 m-2'>
      <div className='flex mb-3 '>
        <PriorityDisplay priority={ticket.priority} />
        <div className=' ml-auto'>
          <DeleteBlock id={ticket._id} />
        </div>
      </div>
      <Link href={`/TicketPage/${ticket._id}`} style={{ display: "contents" }}>
        <h4 className='text-2xl'>{ticket.title}</h4>

        <hr className='h-px border-0 bg-page mb-2' />
        <p className='whitespace-pre-wrap'>{ticket.description}</p>

        <div className='flex-grow'></div>
        <div className='flex mt-2 '>
          <div className='flex flex-col'>
            <p className='text-xs my-1'>{formatDateTime(ticket.createdAt)}</p>
            <Progressbar progress={ticket.progress} />
          </div>
          <div className='ml-auto flex items-end'>
            <StatusDisplay status={ticket.status} />
          </div>
        </div>
      </Link>
    </div>
  );
}

export default TicketCard;
