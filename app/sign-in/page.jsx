import { auth } from "@/auth";

import Credentials from "@/components/Auth/credentials";
import Google_signin from "@/components/Auth/google_signin";
import Meta_signin from "@/components/Auth/meta_signin";

import { redirect } from "next/navigation";

const page = async () => {
  const session = await auth();
  if (session) redirect("/");
  return (
    <main className="auth_page">
      <h1>Login</h1>
      <section className="auth_method">
        <div className="auth_method-1">
          <Credentials />
        </div>
        <div className="auth_method-2">
          <h3>or sign in with</h3>
          <div className="auth-providers">
            <Google_signin />
            <Meta_signin />
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
