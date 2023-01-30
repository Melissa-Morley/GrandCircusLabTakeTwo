import { useState } from "react";
import { Pet } from "../models/Pet";

export function ArraysEx () {
  
    const [colors, setColors] = useState<string[]>(["red", "orange", "yellow"])
      
    function addColor(color:string) : void{
        setColors([...colors, color])
    }

    const [pets, setPets] = useState<Pet[]>(
        [{name: "Tiger", type: "shorthair mix", id: 1},
        {name: "Rufus", type: "blue tortoise", id: 2},
        {name: "Stella", type: "munchkin", id: 3},
        {name: "Sophia", type: "russian blue", id: 4},
        {name: "Muffins", type: "terrior mix", id: 5},
        {name: "Captain", type: "corgi", id: 6},
        
    ]
    )
    
    return (
      
      <div>
        <h2>Colors</h2>
        <ol>
        {colors.map((color, index) => <li key = {index}>{color}</li>)}
        </ol>
        <button onClick = {() => addColor("Violet")}>Add Violet</button>
        <button onClick = {() => addColor("Blue")}>Add Blue</button>
        <button onClick = {() => addColor("Green")}>Add Green</button>

        <h2>Pets</h2>
        <table>
            <tr>
            <th>Name</th>
            <th>Type</th>
            </tr>
            <tr>
            {pets.map((pet, id) => <tr key = {id}><td>{pet.name}</td> <td>{pet.type}</td> </tr>)}
            
            </tr>
        </table>
      </div>
 

      
    );
  }