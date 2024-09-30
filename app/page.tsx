"use client";

import CoverParticles from "@/components/CoverParticles";
import Main from "@/components/Main";
import TransitionPage from "@/components/TransitionPage";

export default function Home() {
  return (
    <main>
      <TransitionPage />
      <div className="flex min-h-[100vh] h-full bg-no-repeat bg-gradient-cover">
      <CoverParticles />
      <Main />
      </div>
    </main>
  );
}
