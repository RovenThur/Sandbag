import React from "react";
import { Outlet } from "react-router";
import { Calendar } from "../features/calendar/Calendar";

export default function CalendarPage () {
    return (
        <>
            <Calendar />
            <Outlet />
        </>
    )
}