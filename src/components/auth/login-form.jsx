import { doSocialLogin } from "_/actions";
import SocialLogin from "./social-login";
import CredentialLogin from "./credential-login";

function LoginForm() {
  return (
    <>
      <CredentialLogin />
      <SocialLogin />
    </>
  );
}

export default LoginForm;
