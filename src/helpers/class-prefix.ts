const PREFIX = "int";

export const cx = (name: string) => {
  if (!name) throw new Error("Class name required");
  return `${PREFIX}_${name}`;
};
