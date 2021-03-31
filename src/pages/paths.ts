type Pages = "home" | "auth" | "profile";

type Path = string;

export const paths: Record<Pages, Path> = {
  home: "/",
  auth: "/auth",
  profile: "/profile"
};
