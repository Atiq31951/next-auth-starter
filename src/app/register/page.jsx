import RegistrationForm from "_/components/auth/registration/regsitration-form";
import SocialLogin from "_/components/auth/login/social-login";
import Link from "next/link";
import React from "react";

function RegisterPage() {
  return (
    <>
      <RegistrationForm />

      <SocialLogin />

      <p className="my-3">
        Already have an account?{" "}
        <Link className="mx-2 underline" href="/">
          Sign In
        </Link>
      </p>
    </>
  );
}

export default RegisterPage;
