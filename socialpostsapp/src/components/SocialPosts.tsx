import { useState } from "react"
import { Button, Modal, ModalBody, ModalHeader } from "reactstrap"
import { Post } from "../interfaces/Post"
import { PostForm } from "./PostForm"
import { PostInList } from "./PostInList"

export function SocialPosts(){
    
    const [posts, setPosts] = useState<Post[]>(
        [{id: 1, title: "Repeating Yourself", thought: "Don't repeat yourself. It's not only repetitive, it's redundant, and people have heard it before"},
         {id: 2, title: "Reading", thought: "Reading is one form of escape. Running for your life is another."},
         {id: 3, title: "Pen vs Sword", thought: "Anyone who thinks the pen is mightier than the sword has not been stabbed by both."},
         {id: 4, title: "People Are Like Salads", thought: "People aren't either wicked or noble. They're like chef's salads, with good things and bad things chopped and mixed together in a vinaigrette of confusion and conflict."}
        ]
    )

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    function getNextID(){
        return Math.max(...posts.map((x) => x.id)) + 1;
    }
    

    function addPost(post:Post){
        post.id = getNextID();
        setPosts([post, ...posts])
        setModal(!modal)
    }

    
    // function onDelete(index:number){
    //     setPosts(posts => {
    //         return posts.filter((_, i) => i !== index)
    //     })
    // }

    const onDelete = (index:number) => {
        let newPostList = posts;

        newPostList.splice(index, 1)

        setPosts([...newPostList])
    }

    
    return (
        <div className = "fullPage">
            <h1>Lemony Snicket Thoughts</h1>
            <Button onClick = {toggle} className="btn-modal">
                New Thought
            </Button>
            <Modal  className="overlay" isOpen = {modal} toggle = {toggle}>
                <div className="modal-content">
            <ModalHeader>
            {/* <button className="close-modal" onClick={toggle}>
                X
              </button> */}
            </ModalHeader>
            <ModalBody>
                <PostForm addPost = {addPost}/>
            </ModalBody>
                </div>
            </Modal>
           <section className = "postDisplay">
            {posts.map((post) => <PostInList post = {post} onDelete = {onDelete}/>)}
            </section>
           
        </div>
    )
}