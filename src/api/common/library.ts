import queryString from "query-string";

function stringifyQuery(query: Record<string, string> | undefined) {
  if (query) {
    return queryString.stringify(query);
  }
  return "";
}

function setContentDefault(headers: Headers): Headers {
  if (!headers.has("content-type")) {
    headers.set("content-type", "application/json; charset=utf-8");
  }
  return headers;
}

function transformHeadersToObject(headers: Headers): Record<string, string> {
  const objectedHeaders: Record<string, string> = {};

  headers.forEach((value, key) => {
    objectedHeaders[key] = value;
  });

  return objectedHeaders;
}

export { stringifyQuery, setContentDefault, transformHeadersToObject };
