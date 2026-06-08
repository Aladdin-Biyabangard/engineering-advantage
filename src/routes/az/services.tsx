import { createFileRoute } from "@tanstack/react-router";
import { ServicesPage } from "@/pages/services-page";
import { createPageHead } from "@/lib/seo";

export const Route = createFileRoute("/az/services")({
  head: () => createPageHead("services", "az"),
  component: ServicesPage,
});
