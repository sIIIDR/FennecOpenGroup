/* eslint-disable */
import React from "react";
import { useRef } from "react";
import { useEffect } from "react";

import "./styles.css";

const renderMatrix = (ref) => {
    const canvas = ref.current;
    const context = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // const katakana = "!@#$%^&*()/|+<>?~`";
    // const latin = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    // const nums = "0123456789";
    // const alphabet = katakana + latin + nums;
    const alphabet = 'FOG';

    const fontSize = 16;
    const columns = canvas.width / fontSize;

    const rainDrops = [];

    for (let x = 0; x < columns; x++) {
        rainDrops[x] = 1;
    }

    const render = () => {
        context.fillStyle = "rgba(26, 26, 26, 0.30)"; // black w a tiny bit of alpha
        context.fillRect(0, 0, canvas.width, canvas.height);

        context.fillStyle = "#fa6c02"; // pure green
        context.font = fontSize + "px monospace";

        for (let i = 0; i < rainDrops.length; i++) {
            // randomize the string of characters to render
            const text = alphabet.charAt(
                Math.floor(Math.random() * alphabet.length)
            );
            context.fillText(text, i * fontSize, rainDrops[i] * fontSize);

            if (
                rainDrops[i] * fontSize > canvas.height &&
                Math.random() > 0.975
            ) {
                rainDrops[i] = 0;
            }
            rainDrops[i]++;
        }
    };

    return () => {
        setInterval(render, 50);
    };
};

const MatrixRainingLetters = (props) => {
    const ref = useRef();
    const keyName = "mrl-" + props.key;
    const thisClassName = "mrl-container " + props.custom_class;
    useEffect(() => renderMatrix(ref));

    return (
        <React.Fragment>
            <canvas key={keyName} className={thisClassName} ref={ref} width='0%'/>
        </React.Fragment>
    );
};

export default MatrixRainingLetters;