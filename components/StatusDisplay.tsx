import { getStatusColor } from "@/lib/getBasePathcomponents";
import { Text } from "@chakra-ui/react";
import React from "react";

type Props = {
  status: string;
};
function StatusDisplay({ status }: Props) {
  return (
    <Text
      className={`inline-block rounded-full px-2 py-1 text-sm font-semibold ${getStatusColor(
        status
      )}`}>
      {status}
    </Text>
  );
}

export default StatusDisplay;
