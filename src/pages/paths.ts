type Pages = "home" | "auth";

type Path = string;

export const paths: Record<Pages, Path> = {
  home: "/",
  auth: "/auth"
};
