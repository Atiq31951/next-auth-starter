"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { doCredentialLogin } from "_/actions";

function CredentialLogin() {
  const [error, setError] = useState();

  const router = useRouter();

  async function handleFormSubmit(e) {
    e.preventDefault();

    try {
      const formData = new FormData(e.target);
      const formDataObject = Object.fromEntries(formData);

      const response = await doCredentialLogin(formDataObject);
      console.log("🚀 ~ handleFormSubmit ~ response:", response);

      if (!!response.error) {
        setError(response.error);
      } else {
        router.push("/");
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          name="email"
          id="email"
          className="border mx-2 border-gray-500 rounded"
        />
      </div>

      <div>
        <label htmlFor="email">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          className="border mx-2 border-gray-500 rounded"
        />
      </div>

      <button
        type="submit"
        className="bg-orange-300 mt-4 rounded flex justify-center items-center w-36"
      >
        Credential Login
      </button>
    </form>
  );
}

export default CredentialLogin;
