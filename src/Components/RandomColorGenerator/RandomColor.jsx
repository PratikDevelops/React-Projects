import React, { useState } from "react";

function RandomColor() {
    const [type, setType] = useState("hex");
    const [color, setColor] = useState("#000000");

    function randomNo(length) {
        return Math.floor(Math.random() * length);
    }

    function generateRGB() {
        const r = randomNo(256);
        const g = randomNo(256);
        const b = randomNo(256);
        setColor(`rgb(${r}, ${g}, ${b})`);
    }

    function generateHex() {
        const hex = `#${randomNo(256).toString(16).padStart(2, "0")}${randomNo(256)
            .toString(16)
            .padStart(2, "0")}${randomNo(256).toString(16).padStart(2, "0")}`;
        setColor(hex);
    }

    function generateRandomColor() {
        if (type === "rgb") {
            generateRGB();
        } else {
            generateHex();
        }
    }

    return (
        <div
            style={{
                height: "50vh",
                width: "50vw",
                background: color,
                display: "flex",
                marginLeft: "300px",
                marginTop: "30px",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                color: "#fff",
                fontFamily: "Arial, sans-serif",
            }}
        >
            <h1>Random Color Generator</h1>
            <p>
                Current Color: <strong>{color}</strong>
            </p>
            <div>
                <button
                    style={{
                        margin: "10px",
                        padding: "10px 20px",
                        background: "#333",
                        color: "#fff",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                    }}
                    onClick={generateRandomColor}
                >
                    Generate Random {type.toUpperCase()} Color
                </button>
                <button
                    style={{
                        margin: "10px",
                        padding: "10px 20px",
                        background: "#007BFF",
                        color: "#fff",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                    }}
                    onClick={() => setType("hex")}
                >
                    Switch to HEX
                </button>
                <button
                    style={{
                        margin: "10px",
                        padding: "10px 20px",
                        background: "#28a745",
                        color: "#fff",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                    }}
                    onClick={() => setType("rgb")}
                >
                    Switch to RGB
                </button>
            </div>
        </div>
    );
}

export default RandomColor;
