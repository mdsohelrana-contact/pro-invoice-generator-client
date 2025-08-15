"use client";

import React from "react";
import { Provider } from "react-redux";
import store from "@/store/store";


interface Props {
  children: React.ReactNode;
}

export default function ProvidersWrapper({ children }: Props) {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}
