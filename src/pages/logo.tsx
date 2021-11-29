import React from "react";
import { Outlet } from "react-router";
import { Counter } from "../features/counter/Counter";
import { ReactComponent as Logo } from "../logo.svg";

export default function LogoContainer() {
    return (<>
        <div >
            <Logo className="App-logo" />
        </div>
        <Counter />
        <Outlet />
    </>)
};