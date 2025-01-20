"use server";

import { doLogout } from "_/app/actions";
import React from "react";

function LogOut() {
  return (
    <form action={doLogout}>
      <button className="bg-blue-400 my-2 rounded p-1 text-white">
        Logout
      </button>
    </form>
  );
}

export default LogOut;
