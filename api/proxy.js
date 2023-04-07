import handler from "../lib/index";

export const config = {
  runtime: "edge",
};

export default async (req) => {
  return handler(req)
};
