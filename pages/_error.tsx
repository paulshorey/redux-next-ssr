import React from "react";
import Link from "next/link";
import { NextPage } from "next";

const Error: NextPage = () => {
  return (
    <>
      <p>Error</p>
      <p>
        <Link href="/">Back to homepage</Link>
      </p>
    </>
  );
};

export default Error;
