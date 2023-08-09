import { useCallback, useEffect, useState } from "react";

/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  const [data, setData] = useState();
  const fetchData = useCallback(async () => {
    const data = await (
      await fetch("/api/graphql", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: `query AllPlanets($first: Int) {
  allPlanets(first: $first) {
    edges {
      cursor
      node {
        created
        id
        name
      }
    }
    pageInfo {
      endCursor
      hasNextPage
      hasPreviousPage
      startCursor
    }
    totalCount
  }
}`,
          variables: {
            first: 20,
          },
        }),
      })
    ).json();
    setData(data);
  }, []);
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return <div>{JSON.stringify(data)}</div>;
}
