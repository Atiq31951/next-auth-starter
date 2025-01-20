import { auth } from "_/auth";
import LoginForm from "_/components/auth/login-form";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth();
  if (!session) {
    return (
      <div className="flex flex-col justify-center items-center m-4">
        <h1 className="text-3xl my-3">Hey, its time to Sign in</h1>
        <LoginForm />
      </div>
    );
  } else {
    redirect("/dashboard");
  }
}
