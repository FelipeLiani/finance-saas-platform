import Image from 'next/image';
import { Loader2 } from 'lucide-react';
import { SignIn, ClerkLoaded, ClerkLoading } from '@clerk/nextjs';

export default function Page() {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className="h-full flex flex-col items-center justify-center px-4">
        <div className="w-full max-w-sm text-center space-y-6">
          <h1 className="font-bold text-3xl text-[#2E2A47]">Welcome back!</h1>
          <p className="text-base text-[#7E8CA0]">
            Log in or Create account to get back to your dashboard!
          </p>
          <div>
            <ClerkLoaded>
              <SignIn path="/sign-in" />
            </ClerkLoaded>
            <ClerkLoading>
              <Loader2 className="animate-spin text-muted-foreground mx-auto" />
            </ClerkLoading>
          </div>
        </div>
      </div>
      <div className="h-full bg-blue-600 hidden lg:flex items-center justify-center">
        <Image src="/logo.svg" height={100} width={100} alt="Logo" />
      </div>
    </div>
  );
}


