"use client";

import { Domain } from "@/lib/drizzle/schema";
import { useRouter, useSearchParams } from "next/navigation";
import HomepageForm from "../forms/homepage-form";
import Image from "next/image";
import GradientRight from "@/assets/images/primary-gradient-right.svg";
import { Button } from "../ui/button/button";
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
    <div className="fixed top-0 w-full h-screen z-20 flex justify-center items-center px-4">
      <div className="bg-dark/70 absolute inset-0 w-full h-full z-20"></div>

      <div className="bg-dark h-max relative z-30  rounded-xl overflow-hidden shadow-2xl">
        <Image
          src={GradientRight}
          alt=""
          width={350}
          height={350}
          className="absolute right-0 top-0 -z-10"
        />

        <button
          onClick={() => router.back()}
          className="absolute top-4 right-3 md:top-8 md:right-8 z-10 cursor-pointer"
        >
          <X color="#fefefe" size={28} />
        </button>

        <HomepageForm domains={domains} />
      </div>
    </div>
  );
}
