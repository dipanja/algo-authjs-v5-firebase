"use client";

import { doCredentialSignup } from "@/app/actions";

import { useState } from "react";
import { useRouter } from "next/navigation";

const SignInForm = () => {
  const router = useRouter();
  const [error, setError] = useState("");

  async function onSubmit(event) {
    event.preventDefault();
    try {
      const formData = new FormData(event.currentTarget);

      const response = await doCredentialSignup(formData);
      // console.log(response);
      router.push("/login");

      if (!!response.error) {
        setError(response.error.message);
      } else {
        router.push("/login");
      }
    } catch (e) {
      setError(e.message);
    }
  }

  return (
    <>
      <div className="text-xl text-red-500">{error}</div>
      <form
        className="my-5 flex flex-col items-center border p-3 border-gray-200 rounded-md"
        onSubmit={onSubmit}
      >
        <div className="my-2">
          <label htmlFor="email">Email Address</label>
          <input
            className="border mx-2 border-gray-500 rounded"
            type="email"
            name="email"
            id="email"
          />
        </div>

        <div className="my-2">
          <label htmlFor="password">Password</label>
          <input
            className="border mx-2 border-gray-500 rounded"
            type="password"
            name="password"
            id="password"
          />
        </div>

        <button
          type="submit"
          className="bg-green-500 mt-4 rounded flex justify-center items-center w-36"
        >
          Ceredential Login
        </button>
      </form>
    </>
  );
};

export default SignInForm;
