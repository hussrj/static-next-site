import type { NextApiRequest, NextApiResponse } from "next";
import { GraphQLResult } from "@aws-amplify/api";
import { API, graphqlOperation } from "aws-amplify";
import { listExternalComponents } from "../../src/graphql/queries";
import { ExternalComponent, ListExternalComponentsQuery } from "../../src/API";

let externalComponents: (ExternalComponent | null)[] | undefined | null;

async function fetchExternalComponents() {
  try {
    const externalToolsResult = (await API.graphql(
      graphqlOperation(listExternalComponents, {
        filter: {
          tags: {
            contains: "rjhuss",
          },
        },
        authMode: "AWS_IAM",
      })
    )) as GraphQLResult<ListExternalComponentsQuery>;
    if (
      externalToolsResult.data !== undefined &&
      externalToolsResult.data.listExternalComponents !== undefined &&
      externalToolsResult.data.listExternalComponents !== null
    ) {
      externalComponents =
        externalToolsResult.data.listExternalComponents.items;
    } else {
      externalComponents = [];
    }
  } catch (err) {
    console.log("error fetching external components");
  }
}

export default async (
  req: NextApiRequest,
  res: NextApiResponse<(ExternalComponent | null)[] | undefined | null>
) => {
  await fetchExternalComponents();
  if (externalComponents !== null && externalComponents !== undefined) {
    res.status(200).json(externalComponents);
  } else {
    res.status(200).json([]);
  }
};