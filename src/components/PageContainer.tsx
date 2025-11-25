"use client";

import type { ReactNode, RefObject } from "react";

interface PageContainerProps {
  children: ReactNode;
  containerRef: RefObject<HTMLElement | null>;
  className?: string;
}

export default function PageContainer({
  children,
  containerRef,
  className,
}: PageContainerProps) {
  return (
    <main
      ref={containerRef}
      className={`relative min-h-screen w-full bg-black text-white overflow-hidden font-robert-regular ${className}`}>
      {children}
    </main>
  );
}
