"use client"

import { useGetAccounts } from "@/features/accounts/api/use-get-accounts";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  const accountsQuery = useGetAccounts()

  return (
    <div>
      dashboard
    </div>
  );
}
