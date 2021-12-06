import React, {useContext} from "react";
import Signup from "./Signup/Signup";
import {MasterContext} from "../../Contexts/MasterContext";

function Body() {

    const {user} = useContext(MasterContext);

    const isUser = user.fullname && user.email;

    console.log("isUser -", isUser);

    return (
        <>
            { !isUser && <Signup/> }
        </>
    )
}

export default Body;