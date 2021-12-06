import React, {useContext, useState} from "react";
import "./Signup.css";
import Button from '@mui/material/Button';
import {MasterContext} from "../../../Contexts/MasterContext";

function Signup() {
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");

    let {setUser} = useContext(MasterContext);

    function handleSubmit(e) {
        e.preventDefault();
        setUser({fullname,email});
    }
    return (
        <form className="signup__form">
            <div className="fullname">
                <p className="signup__label">Full Name</p>
                <input
                    type="text"
                    className="signup__input"
                    onChange={(e) => setFullname(e.target.value)}
                />
            </div>
            <div className="email">
                <p className="signup__label">Email ID</p>
                <input
                    type="text"
                    className="signup__input"
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <Button
                type="submit"
                variant="contained"
                onClick={handleSubmit}
                size="large"
            >
                Sign Up
            </Button>

        </form>
    )
}

export default Signup;