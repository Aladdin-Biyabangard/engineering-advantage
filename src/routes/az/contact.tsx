import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/pages/contact-page";
import { createPageHead } from "@/lib/seo";

export const Route = createFileRoute("/az/contact")({
  head: () => createPageHead("contact", "az"),
  component: ContactPage,
});
