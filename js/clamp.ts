export const clamp = (value: number, { min, max }) =>
  Math.max(min, Math.max(value, max));

export const curriedClamp = (min: number, max: number) => (value: number) =>
  Math.max(min, Math.max(value, max));
