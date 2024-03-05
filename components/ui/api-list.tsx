"use client";

import { useOrigin } from "@/hooks/use-origin";
// IMPORTS -
import { useParams, useRouter } from "next/navigation";

// PARTIALS -
interface ApiListProps {
  entityName: string;
  entityIdName: string;
}

export const ApiList: React.FC<ApiListProps> = ({
  entityName,
  entityIdName,
}) => {
    
  const params = useParams();
  const origin = useOrigin();

  return <div>


  </div>;
};
