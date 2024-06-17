"use client";

import React from "react";

type User = {
  id: number,
  nome: string,
  username: string,
  email: string
}

type IUserContext = {
  user: User | null | undefined;
  setUser: React.Dispatch<React.SetStateAction<User | null | undefined>>
};

export const UserContext = React.createContext<IUserContext | null | undefined>(null);

export function UserContextProvider({
  children,
  user
}: {
  children: React.ReactNode;
  user: User | null | undefined
}) {

  const [userState, setUser] = React.useState<User | null | undefined>(user)

  return (
    <UserContext.Provider value={{ user: userState, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
