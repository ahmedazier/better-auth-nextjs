import Link from "next/link";

import { LoginForm } from "@/components/forms/login-form";
import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Link
          href="/"
          className="flex items-center gap-2 self-center font-medium"
        >
          <div className="flex h-8 w-30 items-center justify-center">
            <Image
              className="rounded-sm size-30"
              width={600}
              height={600}
              src={"/next.svg"}
              alt="Better Auth next.js starter"
              priority
            />
          </div>
        </Link>
        <LoginForm />
      </div>
    </div>
  );
}