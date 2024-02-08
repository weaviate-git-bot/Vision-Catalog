import type { PropsWithChildren } from "react";
import React from "react";
import { SiteHeader } from "@/app/[locale]/(lobby)/_components/SiteHeader";
import { SiteFooter } from "@/app/[locale]/(lobby)/_components/SiteFooter";

export default function LobbyLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
