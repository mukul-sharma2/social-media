import React from "react";
import { NavLink } from "react-router-dom";
import Leftbar from '../../component/Shared/sidebar/Left';

import ChatList from "./Chat-list";

function Inbox() {
    return (
        <>
            <Leftbar />
            <ChatList />

           
        </>
    );
}
export default Inbox;