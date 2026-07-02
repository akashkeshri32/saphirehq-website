"use client";

import { Domain } from "@/lib/drizzle/schema";
import { useRouter, useSearchParams } from "next/navigation";
import HomepageForm from "../forms/homepage-form";
import { X } from "lucide-react";

type Props = {
  domains: Domain[];
};

export default function HomepageFormModal({ domains }: Props) {
  const params = useSearchParams();

  const showModal: boolean = params.has("apply-now");
  const router = useRouter();

  if (!showModal) return;
  return (
    <div className="fixed top-0 w-full h-screen z-50 flex justify-center items-center px-4">
      <div className="bg-black/50 backdrop-blur-sm absolute inset-0 w-full h-full z-20" />

      <div className="bg-surface-1 relative z-30 rounded-2xl overflow-hidden shadow-2xl border border-border-default">
        {/* Decorative gradient orb */}
        <div
          className="absolute right-0 top-0 w-72 h-72 pointer-events-none -z-10"
          style={{
            background:
              "radial-gradient(ellipse at right top, rgba(0,123,255,0.10) 0%, transparent 65%)",
          }}
        />

        <button
          onClick={() => router.back()}
          className="absolute top-4 right-3 md:top-8 md:right-8 z-10 cursor-pointer text-text-secondary hover:text-ink transition-colors"
        >
          <X size={28} />
        </button>

        <HomepageForm domains={domains} />
      </div>
    </div>
  );
}
