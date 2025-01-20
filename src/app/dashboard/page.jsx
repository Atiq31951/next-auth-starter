import React from "react";
import Image from "next/image";
import { redirect } from "next/navigation";

import { auth } from "_/auth";
import LogOut from "_/components/auth/log-out";

// import { auth } from "_/auth";

const Dashboard = async () => {
  const session = await auth();

  if (!session?.user) {
    redirect("/");
  }
  return (
    <div className="flex flex-col items-center m-4">
      <h1 className="text-3xl my-2">{session?.user?.name}</h1>
      <Image
        src={session?.user?.image}
        alt={session?.user?.name}
        height={72}
        width={72}
        className="rounded-full"
      />

      <LogOut />
    </div>
  );
};

export default Dashboard;
