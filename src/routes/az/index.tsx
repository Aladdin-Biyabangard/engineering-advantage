import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/pages/home-page";
import { createPageHead } from "@/lib/seo";

export const Route = createFileRoute("/az/")({
  head: () => createPageHead("home", "az"),
  component: HomePage,
});
