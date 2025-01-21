import Link from "next/link";

import SocialLogin from "./social-login";
import CredentialLogin from "./credential-login";

function LoginForm() {
  return (
    <>
      <CredentialLogin />
      <SocialLogin />
      <p className="my-3">Don't have account?</p>
      <Link href="/register" className="text-blue-500">
        Register
      </Link>
    </>
  );
}

export default LoginForm;
