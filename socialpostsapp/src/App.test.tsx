import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import { Post } from './interfaces/Post';
import { PostInList } from './components/PostInList';
import { PostForm } from './components/PostForm';


// test("PostInList renders title", () => {
//   let postinList:Post = {
//     title: "Test Title",
//     thought: "test thought"
//   }

//   render(<PostInList post = {postinList} onDelete = {() => {}}  />);

//   const postTitle = screen.getByText("Test Title");

//   expect(postTitle).toBeInTheDocument();

// });


// test("PostInList renders thought", () => {
//   let postinList:Post = {
//     title: "Test Title",
//     thought: "test thought"
//   }

//   render(<PostInList post = {postinList} onDelete = {() => {}}  />);

//   const postThought = screen.getByText("test thought");

//   expect(postThought).toBeInTheDocument();
// });

// test("when user clicks delete button, toDelete is called", () => {
//   let postinList:Post = {
//     title: "Test Title",
//     thought: "test thought"
//   }

//   const spy = jest.fn();

//   render(<PostInList post = {postinList} onDelete = {spy}></PostInList> );

//   const deleteBtn = screen.getByRole("button", {name: "delete"});

//   fireEvent.click(deleteBtn);

//   expect(spy).toHaveBeenCalled();
// });

// test("filling out form calls callback with correct form data", () => {
//   const spy = jest.fn();

//   render(<PostForm onSubmit={spy} />);

//   const titleElement = screen.getByTestId("titleTest");
//   fireEvent.change(titleElement, {target: {value: "test title"}});

//   const thoughtElement = screen.getByTestId("thoughtTest");
//   fireEvent.change(thoughtElement, {target: {value: "thought test"}});

//   fireEvent.click(screen.getByRole("button", {name: "Add Post"}));
//   expect(spy).toBeCalledWith({title: "title test", thought: "thought test"})

// });

