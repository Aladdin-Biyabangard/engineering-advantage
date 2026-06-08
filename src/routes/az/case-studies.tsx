import { createFileRoute } from "@tanstack/react-router";
import { CaseStudiesPage } from "@/pages/case-studies-page";
import { createPageHead } from "@/lib/seo";

export const Route = createFileRoute("/az/case-studies")({
  head: () => createPageHead("experience", "az"),
  component: CaseStudiesPage,
});
