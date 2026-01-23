import type { Route } from "./+types/home";
import { Main } from "~/components/main";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Panplans" },
    { name: "description", content: "Welcome to Panplans" },
    { name: "generator", content: "React Router" },
  ];
}

export default function Home() {
  return (
    <Main>
      <section className="min-h-screen flex items-center justify-center">
        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight">
          Welcome to <span className="text-accent-foreground">Panplans</span>
        </h1>
      </section>
    </Main>
  );
}
