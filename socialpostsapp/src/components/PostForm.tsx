import React, { useState } from "react"
import { Post } from "../interfaces/Post";


export function PostForm({onSubmit, onClose} : {onSubmit: (post: Post) => void; onClose: () => void}){

    const [title, setTitle] = useState<string>("");
    const [thought, setThought] = useState<string>("");

    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault();
        onSubmit({title, thought});
    }

    return (
        <div>
//             <form className = "form" onSubmit = {handleSubmit}>
//                 <button onClick = {onClose}>X</button>
//                 <label>Title</label>
//                 <input data-testid = "titleTest" className = "titleInput" type = "text" onChange = {(e) => setTitle(e.target.value)}></input>
//                 <label>Thought </label>
//                 <input data-testid = "thoughtTest" className = "thoughtInput" type = "text" onChange = {(e) => setThought(e.target.value)}></input>
//                 <button className = "addPostBtn" type = "submit">Add Post</button>
//             </form>
//         </div>
    )
}