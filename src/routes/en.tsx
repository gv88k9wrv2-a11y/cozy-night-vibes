import { createFileRoute, Outlet } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/en")({
  head: () => ({
    meta: [
      { property: "og:locale", content: "en_US" },
      { property: "og:locale:alternate", content: "he_IL" },
    ],
  }),
  component: EnLayout,
});

function EnLayout() {
  useEffect(() => {
    const html = document.documentElement;
    const prevLang = html.getAttribute("lang");
    const prevDir = html.getAttribute("dir");
    html.setAttribute("lang", "en");
    html.setAttribute("dir", "ltr");
    return () => {
      if (prevLang) html.setAttribute("lang", prevLang);
      if (prevDir) html.setAttribute("dir", prevDir);
    };
  }, []);

  return (
    <div lang="en" dir="ltr">
      <Outlet />
    </div>
  );
}
