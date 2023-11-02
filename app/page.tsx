import TicketCard from "@/components/TicketCardcomponents";
import getBasePath from "@/lib/getBasePathcomponents";
import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";

const getTickets = async () => {
  try {
    const res = await fetch(`${getBasePath()}/api/Tickets`, {
      cache: "no-store",
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function Home() {
  const data: Awaited<ReturnType<typeof getTickets>> = await getTickets();
  const tickets: TicketData[] = await data.tickets;

  const uniqueCategories: string[] = Array.from(
    new Set(tickets?.map(({ category }) => category))
  );
  console.log(uniqueCategories);

  return (
    <main className='p-5'>
      {tickets &&
        uniqueCategories.map((uniqueCategory, categoryIndex) => (
          <Box key={categoryIndex} className='mb-4'>
            <Text className='text-xl'>{uniqueCategory}</Text>
            <div className='md:grid grid-cols-2 xl:grid-cols-4 '>
              {tickets
                .filter((ticket) => ticket.category === uniqueCategory)
                .map((filteredTicket, idx) => (
                  <TicketCard id={idx} key={idx} ticket={filteredTicket} />
                ))}
            </div>
          </Box>
        ))}
    </main>
  );
}
