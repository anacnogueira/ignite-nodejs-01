export function extractQueryParams(query) {
  return query
    .substr(1)
    .split("&")
    .reduce((queryParamns, param) => {
      const [key, value] = param.split("=");

      queryParamns[key] = value;

      return queryParamns;
    }, {});
}
