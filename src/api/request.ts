import queryString from "query-string";

export type Request = {
  path: string;
  method: string;
  query?: Record<string, string>;
  headers?: Record<string, string>;
  cookies?: string;
};

const api_prefix = process.env.API_PREFIX ?? "https://api.nasa.gov/";

const stringifyQuery = (query: Record<string, string> | undefined) => {
  if (query) {
    return queryString.stringify(query);
  }
  return "";
};

const setContentDefault = (headers: Headers): Headers => {
  if (!headers.has("content-type")) {
    headers.set("content-type", "application/json; charset=utf-8");
  }
  return headers;
};

const request = async ({ path, method, ...params }: Request) => {
  const headers = new Headers(params.headers);
  setContentDefault(headers);

  const query = stringifyQuery(params.query);
  // const body = headers.get("content-type")?.includes("application/json") && params.body;

  const fullPath = `${api_prefix}${path}${query}`;

  const response = await fetch(fullPath, { method, headers });

  return response.json();
};
