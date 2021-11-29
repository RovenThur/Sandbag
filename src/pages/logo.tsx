import React from "react";
import { Outlet } from "react-router";
import { Counter } from "../features/counter/Counter";
import logo from "../logo.svg";

export default function LogoContainer() {
    return (<>
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <Outlet />
    </>)
};