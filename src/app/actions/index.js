"use server";

import { signIn, signOut } from "_/auth";

export const doSocialLogin = async (formData) => {
  const action = formData.get("action");
  console.log("Hello", action);
  await signIn(action, {
    redirectTo: "/dashboard",
  });
};

export const doLogout = async () => {
  await signOut({ redirectTo: "/" });
};
