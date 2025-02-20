"use server";

import { signIn, signOut } from "_/auth";

export const doSocialLogin = async (formData) => {
  const action = formData.get("action");
  await signIn(action, {
    redirectTo: "/dashboard",
  });
};

export const doLogout = async () => {
  await signOut({ redirectTo: "/" });
};

export const doCredentialLogin = async ({ email, password }) => {
  try {
    const response = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    return response;
  } catch (error) {
    throw new Error(error);
    return null;
  }
};
