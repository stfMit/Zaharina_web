// src/components/LoadingScreen/LoadingScreen.js
import React, { useEffect } from "react";
import logo from "../../assets/cookie_ai.png";
import Box from "@mui/material/Box";
import "./App.css"; // keep your css import (or rename to LoadingScreen.css if you prefer)

function LoadingScreen({ onFinish }) {
    useEffect(() => {
        const t = setTimeout(() => {
            if (typeof onFinish === "function") onFinish();
        }, 1500);

        return () => clearTimeout(t);
    }, [onFinish]);

    return (
        <Box className="App-header">
            <Box style={{ position: "relative", display: "flex", justifyContent: "center" }}>
                <img src={logo} className="App-logo" alt="logo" />
            </Box>
        </Box>
    );
}

export default LoadingScreen;
