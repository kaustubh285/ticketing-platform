const getBasePath = () => {
  let basePathURL =
    process.env.NODE_ENV == "development"
      ? "http://localhost:3000"
      : `https://${process.env.VERCEL_URL}`;

  return basePathURL;
};
export default getBasePath;

export const getStatusColor = (status: string) => {
  let textColor = "text-gray-500 bg-gray-200";

  switch (status.toLowerCase()) {
    case "done":
      textColor = "text-green-900 bg-green-100";
      break;
    case "doing":
      textColor = "text-yellow-900 bg-yellow-100";
      break;
    case "todo":
      textColor = "text-red-900 bg-red-100";
      break;
    case "archived":
      textColor = "text-gray-500 bg-gray-200";
      break;
    default:
      textColor = "text-gray-500 bg-gray-200";
      break;
  }

  return textColor;
};

export const formatDateTime = (timestamp: string) => {
  const date = new Date(timestamp);

  return date.toLocaleString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
};
