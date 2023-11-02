import Ticket from "@/models/Ticketcomponents";
import { NextResponse } from "next/server";

type Props = {
  params: { id: number };
};

export async function GET(req: Request, { params }: Props) {
  try {
    const { id } = params;

    const ticket = await Ticket.findOne({ _id: id });

    return NextResponse.json({ ticket }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}

export async function DELETE(req: Request, { params }: Props) {
  try {
    const { id } = params;

    await Ticket.findByIdAndDelete(id);
    return NextResponse.json({ message: "deleted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}

export async function PUT(req: Request, { params }: Props) {
  try {
    const { id } = params;

    const body = await req.json();
    const ticketData: TicketType = body.formData;
    const updateTicketData = await Ticket.findByIdAndUpdate(id, {
      ...ticketData,
    });
    return NextResponse.json({ message: "Ticket updated" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
