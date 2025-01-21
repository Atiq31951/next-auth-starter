import { doSocialLogin } from "_/actions";

function SocialLogin() {
  return (
    <form action={doSocialLogin}>
      <button
        className="bg-pink-400 text-white rounded-md m-1 text-lg"
        type="submit"
        name="action"
        value="google"
      >
        Sign In with Google
      </button>

      <button
        className="bg-black text-white rounded-md m-1 text-lg"
        type="submit"
        name="action"
        value="github"
      >
        Sign In with Github
      </button>
    </form>
  );
}

export default SocialLogin;
