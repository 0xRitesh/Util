export const toCamelCase = (string: string) =>
  string
    .split(" ")
    .map((word, i) =>
      !!i
        ? word.charAt(0).toUpperCase() + word.slice(1)
        : word.charAt(0).toLowerCase() + word.slice(1)
    )
    .join("");
