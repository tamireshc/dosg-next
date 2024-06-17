"use client";

import { UserContext } from "@/context/user-contex";
import React from "react";

export default function ContaPage() {
  const data = React.useContext(UserContext);
  console.log(data);
  return (
    <main>
      <h1>Conta</h1>
    </main>
  );
}
