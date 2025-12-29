import React, { useState } from "react";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
import FrontPage from "./components/FrontPage/FrontPage";

export default function App() {
    const [doneLoading, setDoneLoading] = useState(false);
    console.log(doneLoading);
    return (
        <>
            {!doneLoading ? (
                <LoadingScreen onFinish={() => setDoneLoading(true)} />
            ) : (
                <FrontPage />
            )}
        </>
    );

}
