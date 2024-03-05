"use client";

import { useOrigin } from "@/hooks/use-origin";
// IMPORTS -
import { useParams, useRouter } from "next/navigation";
import ApiAltert from "../api-alert";

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

  const baseUrl = `${origin}/api/${params.storeId}`;

  console.log(baseUrl);

  return (
    <>
      <ApiAltert
        title="GET"
        variant="public"
        description={`${baseUrl}/${entityName}`}
      />
      <ApiAltert
        title="GET"
        variant="public"
        description={`${baseUrl}/${entityName}/{${entityIdName}}`}
      />

      <ApiAltert
        title="POST"
        variant="admin"
        description={`${baseUrl}/${entityName}`}
      />

      <ApiAltert
        title="PUT"
        variant="admin"
        description={`${baseUrl}/${entityName}/{${entityIdName}}`}
      />

      <ApiAltert
        title="DELETE"
        variant="admin"
        description={`${baseUrl}/${entityName}/{${entityIdName}}`}
      />
    </>
  );
};
