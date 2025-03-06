"use client";

import { handleSignOut } from "./signoutfunc";
const Signout = () => {
  return (
    <button
      onClick={async () => {
        await handleSignOut();
      }}
    >
      Logout
    </button>
  );
};

export default Signout;
