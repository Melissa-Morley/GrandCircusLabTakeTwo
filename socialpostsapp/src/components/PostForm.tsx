import React, { useState } from "react"


export interface IPostFormProps{
    addPost: Function,
    // onClose: Function
}

export function PostForm(props:IPostFormProps){

    const [title, setTitle] = useState<string>("");
    const [thought, setThought] = useState<string>("");

    function onSubmit(e:React.FormEvent<HTMLElement>){
        e.preventDefault();

        props.addPost({title: title, thought: thought})

    }

    

    function onClose(){

    }


    return(
        <div>
            <form className = "form" onSubmit = {onSubmit}>
                <button onClick = {onClose}>X</button>
                <label>Title </label>
                <input data-testid = "titleTest" className = "titleInput" type = "text" onChange = {(e) => setTitle(e.target.value)}></input>
                <label>Thought </label>
                <input data-testid = "thoughtTest" className = "thoughtInput" type = "text" onChange = {(e) => setThought(e.target.value)}></input>
                <button className = "addPostBtn" type = "submit">Add Post</button>
            </form>
        </div>
    )
}