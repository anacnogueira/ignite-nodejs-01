export function buildRoutePath(path) {
  const routeParametersRegex = /:([a-zA-z]+)/g;

  console.log(Array.from(path.matchAll(routeParametersRegex)));
}
