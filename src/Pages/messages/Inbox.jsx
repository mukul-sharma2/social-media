import React from "react";
import { NavLink } from "react-router-dom";
import Leftbar from "../component/Shared/sidebar/Left";

import Rightbar from '../component/Shared/sidebar/Right';
import "./inbox.css";
import ChatList from "./Chat-list";

function Inbox() {
    return (
        <>
            <Leftbar />
            <ChatList />

            <Rightbar />
        </>
    );
}
export default Inbox;