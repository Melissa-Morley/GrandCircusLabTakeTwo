import { useState } from "react";
import '../css/Votes.css';

export function Votes() {
    const [chocolateVotes, setChocolateVotes] = useState<number>(0);
    const [strawberryVotes, setStrawberryVotes] = useState<number>(0);
    const [vanillaVotes, setVanillaVotes] = useState<number>(0);
    
    function getTotal(){
        return chocolateVotes + strawberryVotes + vanillaVotes;
    }

    function percentageDisplay(n:number, total:number){
        if(total === 0){
            return "0.0%";
        }
        else{
            return (n/total * 100).toFixed(1) + "%";
        }
    }

    return (
        <div className = "Votes">
        <h2>Vote Here</h2>

        <div className = "button-line">
        <button onClick = {() => setChocolateVotes(chocolateVotes + 1)}>Chocolate</button>
        <button onClick = {() => setVanillaVotes(vanillaVotes + 1)}>Vanilla</button>
        <button onClick = {() => setStrawberryVotes(strawberryVotes + 1)}>Strawberry</button>

        </div>
            {getTotal() === 0 ? 
            <>
            <p>No one has voted yet!</p>
            </>   
            :
            <div className = "progressBars">
            <p><label>Chocolate</label> {chocolateVotes} ({percentageDisplay(chocolateVotes, getTotal())});</p>
            <progress className = "progressChocolate"  value={chocolateVotes / getTotal()}></progress>

            <p><label>Vanilla</label> {vanillaVotes} ({percentageDisplay(vanillaVotes, getTotal())});</p>
            <progress className = "progressVanilla" value={vanillaVotes / getTotal()}></progress>

            <p><label>Strawberry</label> {strawberryVotes} ({percentageDisplay(strawberryVotes, getTotal())});</p>
            <progress className = "progressStrawberry" value={strawberryVotes / getTotal()}></progress>
            
            </div> 
        }
        </div>
    )
};