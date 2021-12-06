import React, {useState} from "react";
import './App.css';
import Header from "./Components/Header/Header";
import Body from "./Components/Body/Body";

import {MasterContext} from "./Contexts/MasterContext";
function App() {
    const [user, setUser] = useState({});

    console.log("context updated - ", user);
    return (
        <div className="App">
            <MasterContext.Provider value={{
                user,
                setUser
            }}>
                <Header />
                <Body />
            </MasterContext.Provider>
        </div>
    );
}

export default App;
