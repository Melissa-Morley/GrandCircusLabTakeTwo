import { Post } from "../interfaces/Post";

export function PostInList({post, onDelete} : {post: Post, onDelete: () => void}){



    return(
        <div className = "individualPost">
            <section>
            <h3>{post.title}</h3>
            <p>{post.thought}</p>
            </section>
            <button type = "button" className = "postDeleteBtn" onClick={onDelete}>delete</button>
            
        </div>
    )
}