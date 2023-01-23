import { useState } from "react";
import { Ad } from "./Ad";

export function AdDesigner() {
    const [flavor, setFlavor] = useState<string>("Chocolate");
    const [isLight, setIsLight] = useState<boolean>(true);
    const [fontSize, setfontSize] = useState<number>(24);
    const [buttonActive, setButtonActive] = useState<boolean>(false);

    const ToggleClass = () => {
        setButtonActive(!buttonActive);
    };

    
    
    return(
        <div className = "adDesign">
            <h2>Ad Designer</h2>

            <Ad flavor= {flavor}
                isLight = {isLight}
                fontSize = {fontSize}
            />

            <h3>What to Support</h3>

            

            <div className = "button-line">
            <button onClick={() => setFlavor("Chocolate")}>Chocolate</button>
            <button onClick={() => setFlavor("Vanilla")}>Vanilla</button>
            <button onClick={() => setFlavor("Strawberry")}>Strawberry</button>

            </div>

            <h3>Color Theme</h3>
            <div className = "button-line">
            <button onClick = {() => setIsLight(true)}>Light</button>
            <button onClick = {() => setIsLight(false)}>Dark</button>
            </div>

            <h3>Font Size</h3>
            <div className = "button-line">
            <button onClick = {() => setfontSize(fontSize - 2)}>Down</button>
            <input type="number" value={fontSize}></input>
            <button onClick = {() => setfontSize(fontSize + 2)}>Up</button>
            </div>

        </div>
    )
};