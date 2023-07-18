"use client";
import React, { useEffect } from "react";
import { useAuthContext } from  "../../context/AuthContext"; 
import { useRouter } from "next/navigation";
import Link from "next/link";
import signOutFunc  from "../../firebase/auth/signOut";
 

function Page() {
  const { user } = useAuthContext ();
  const router = useRouter();

  useEffect(() => {
    console.log(`${user}is null`);
    if (user == null) router.push("/signin");
  }, [user]);

  // if user is not logged in create a Link that takes them to the login page
  if (user == null) {
    console.log(user)
    return (
      <div>
        <Link href="/signin">Login</Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <h1>Admin Page</h1>
      <p>Logged in as {user?.email}</p>
      <Link href="/artists">Artists</Link>
      <Link href="/management/uploads">Upload</Link>
      <button onClick={signOutFunc}>Sign Out</button>
    </div>
  );
}

export default Page;
