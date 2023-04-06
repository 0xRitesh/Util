type Falsy = false | undefined | null;

export const cn = (...classes: (string | Falsy)[]) =>
  classes.filter(Boolean).join(" ");
