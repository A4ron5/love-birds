import {
  setContentDefault,
  transformHeadersToObject,
  stringifyQuery
} from "./library";

export interface Request {
  path: string;
  method: string;
  body?: Record<string, unknown> | null | void;
  query?: Record<string, string>;
  headers?: Record<string, string>;
  cookies?: string;
}

const apiPrefix = process.env.API_PREFIX ?? "https://api.nasa.gov/";

export const request = async <T>({
  path,
  method,
  ...params
}: Request): Promise<T> => {
  const headers = new Headers(params.headers);
  setContentDefault(headers);

  const query = stringifyQuery(params.query);
  const body =
    headers.get("content-type")?.includes("application/json") && params.body
      ? JSON.stringify(params.body)
      : undefined;

  const uri = `${apiPrefix}${path}${query}`;

  const response = await fetch(uri, { method, headers, body });

  const json: T = await response.json();

  const mapped = {
    ok: response.ok,
    body: json,
    response: response.status,
    headers: transformHeadersToObject(headers)
  };

  if (!response.ok) {
    throw mapped;
  }

  throw mapped;
};
