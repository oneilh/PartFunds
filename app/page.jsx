import { auth } from "@/auth";
import Signout from "@/components/Auth/signout/signout";
import { redirect } from "next/navigation";

import Label from "@/components/Labels/label";

export default async function Home() {
  const session = await auth();
  if (!session) redirect("/sign-in");

  return (
    <main>
      <Label/>
    </main>
  );
}
