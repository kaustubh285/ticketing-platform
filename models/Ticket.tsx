import mongoose, { Document, Schema } from "mongoose";

mongoose.connect(process?.env?.MONGO_DB_URI || "");

mongoose.Promise = global.Promise;

const ticketSchema = new Schema<ITicket>(
  {
    title: String,
    description: String,
    category: String,
    priority: Number,
    progress: Number,
    status: String,
    active: Boolean,
  },
  {
    timestamps: true,
  }
);

const Ticket =
  mongoose.models.Ticket || mongoose.model<ITicket>("Ticket", ticketSchema);

export default Ticket;
