import { FcGoogle } from "react-icons/fc";
import { signIn } from "@/auth";
const Google_signin = () => {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google");
      }}
    >
      <button>
        <FcGoogle className="icon icon_provider" type="submit" />
      </button>
    </form>
  );
};

export default Google_signin;
