import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/az")({
  component: () => <Outlet />,
});
