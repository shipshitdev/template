"use client";

import type { ReactNode } from "react";

interface ProvidersProps {
  children: ReactNode;
}

// Clerk is loaded conditionally — app works without auth keys
const hasClerk =
  typeof process !== "undefined" &&
  process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY &&
  process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY !== "";

export function Providers({ children }: ProvidersProps) {
  if (hasClerk) {
    // Dynamic import to avoid module errors when Clerk keys are missing
    const { ClerkProvider } = require("@clerk/nextjs");
    return <ClerkProvider>{children}</ClerkProvider>;
  }

  return <>{children}</>;
}
