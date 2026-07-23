"use client";

import { useEffect, useState } from "react";
import Image, { type StaticImageData } from "next/image";
import { Expand, X } from "lucide-react";

type Props = {
  image: StaticImageData;
  alt: string;
};

export const CertificateCard = ({ image, alt }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="group relative w-full overflow-hidden rounded-xl border border-white/10 cursor-pointer"
      >
        <Image src={image} alt={alt} className="w-full h-auto" />

        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-colors flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-white/10 border border-white/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <Expand size={20} className="text-white" />
          </div>
        </div>
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-6"
          onClick={() => setIsOpen(false)}
        >
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="Close"
            className="absolute top-6 right-6 w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
          >
            <X size={20} />
          </button>

          <Image
            src={image}
            alt={alt}
            className="max-w-full max-h-full w-auto h-auto object-contain rounded-xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};
