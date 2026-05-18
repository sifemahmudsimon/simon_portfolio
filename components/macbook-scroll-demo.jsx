"use client";
import React from "react";
import { MacbookScroll } from "@/components/ui/macbook-scroll";

export default function MacbookScrollDemo({ title, src }) {
  return (
    <div className="w-full overflow-hidden bg-white dark:bg-[#0B0B0F]">
      <MacbookScroll
        title={<span>{title}</span>}
        src={src}
        showGradient={false}
      />
    </div>
  );
}
