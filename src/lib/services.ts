export type Service = {
  slug: string;
  title: string;
  icon: "Boxes" | "Cpu" | "ServerCog" | "Code2" | "ShieldCheck";
  summary: string;
  details: string[];
};

export const services: Service[] = [
  {
    slug: "architecture",
    title: "Software Architecture Consulting",
    icon: "Boxes",
    summary:
      "System design, scalability, architecture reviews, and long-term technical strategy.",
    details: [
      "Greenfield system design and domain modeling",
      "Architecture reviews of existing platforms",
      "Scalability, performance, and reliability strategy",
      "Technical roadmaps aligned with business goals",
    ],
  },
  {
    slug: "ai",
    title: "AI Consulting",
    icon: "Cpu",
    summary: "AI adoption, LLM integrations, automation, and end-to-end AI product development.",
    details: [
      "LLM integration into existing products and workflows",
      "RAG, agents, and evaluation pipelines",
      "AI-powered automation for internal operations",
      "Full AI product development, from prototype to production",
    ],
  },
  {
    slug: "devops",
    title: "DevOps & Infrastructure",
    icon: "ServerCog",
    summary:
      "Cloud, CI/CD, Kubernetes, monitoring, reliability, and infrastructure design.",
    details: [
      "Cloud architecture on AWS, GCP, and Azure",
      "CI/CD pipelines and developer platforms",
      "Kubernetes, containers, and platform engineering",
      "Observability, incident response, and SRE practices",
    ],
  },
  {
    slug: "custom-software",
    title: "Custom Software Development",
    icon: "Code2",
    summary:
      "Web platforms, backend systems, APIs, internal tools, and enterprise software.",
    details: [
      "Web platforms and SaaS products",
      "Backend systems, APIs, and integrations",
      "Internal tools and operations dashboards",
      "Enterprise software built for the long run",
    ],
  },
  {
    slug: "security",
    title: "Security & Penetration Testing",
    icon: "ShieldCheck",
    summary:
      "Security audits, pentesting, vulnerability assessment, and secure architecture.",
    details: [
      "Application and infrastructure penetration testing",
      "Security audits and threat modeling",
      "Vulnerability assessment and remediation guidance",
      "Secure-by-default architecture and code review",
    ],
  },
];