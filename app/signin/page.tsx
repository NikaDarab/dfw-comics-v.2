"use client";
import React from "react";
import signIn from "../../firebase/auth/signIn.js";
import { useRouter } from "next/navigation";

function Page() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const router = useRouter();

  const handleForm = async (event: React.FormEvent) => {
    event.preventDefault();

    const { result, error } = await signIn(email, password);

    if (error) {
      return console.log(error);
    }

    return router.push("/management");
  };
  return (
    <div className="flex items-center justify-center h-[83vh]">
      <div className="flex items-center justify-center">
        <div className="form-container flex items-center justify-center">
          <div className="flex flex-col items-center gap-[12px] text-black bg-white rounded-[10px] form-container p-[52px]">
            <div className="text-[1.4rem] font-medium">Admin only</div>
            <form onSubmit={handleForm} className="flex flex-col gap-[20px]">
              <label htmlFor="email">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter Email "
                  className="flex  py-[16px] pl-[24px] pr-[30px] items-center gap-[10px] rounded-[8px] border "
                />
              </label>
              <label htmlFor="password">
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter Password"
                  className="flex py-[16px] pl-[24px] pr-[30px] items-center gap-[10px] rounded-[8px] border"
                />
              </label>
              <button
                type="submit"
                className="text-gray-200 text-[1.2rem] rounded-[8px] bg-green-700 hover:bg-green-500 flex justify-center items-center py-[14px]"
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
