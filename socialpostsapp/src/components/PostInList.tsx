import { Post } from "../interfaces/Post";

interface PostInListProps{
    post: Post
    onDelete: Function
}

export function PostInList(props:PostInListProps){

        


    return(
        <div className = "individualPost">
            <section>
            <h3>{props.post.title}</h3>
            <p>{props.post.thought}</p>
            </section>
            <button className = "postDeleteBtn" onClick={onDelete}>delete</button>
            
        </div>
    )
}