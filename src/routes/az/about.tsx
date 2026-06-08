import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@/pages/about-page";
import { createPageHead } from "@/lib/seo";

export const Route = createFileRoute("/az/about")({
  head: () => createPageHead("about", "az"),
  component: AboutPage,
});
