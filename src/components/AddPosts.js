import React, { useState } from "react";
import { useNavigate } from "react-router";
import { createNewPost } from "../api";
import "./AddPosts.css" 

const AddPosts = ({ username, setPosts, posts }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("free");
  const [location, setLocation] = useState("On Request");
  const [willDeliver, setWillDeliver] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = localStorage.getItem("token");
    const newPost = {
      title: title,
      description: description,
      price: price,
      location: location,
      willDeliver: willDeliver,
    };
    const freshPost = await createNewPost(token, newPost);
    setPosts([...posts, freshPost]);
    navigate("/Posts");
  };
  return (
    <div id="newPostBox">
      <form id="newPost" onSubmit={handleSubmit}>
        <label className="postTitles">Title:</label>
        <input
          onChange={(event) => {
            setTitle(event.target.value);
          }}
          type="text"
          title="title"
          value={title}
          required
        />
        <label className="postTitles">Description:</label>
        <input
          id="descriptionID"
          onChange={(event) => {
            setDescription(event.target.value);
          }}
          type="text"
          description="description"
          value={description}
          required
        />
        <label className="postTitles">Location:</label>
        <input
          className="postTitles"
          onChange={(event) => {
            setLocation(event.target.value);
          }}
          type="text"
          location="location"
          value={location}
        />
        <label className="postTitles">Price:</label>
        <input
          className="postTitles"
          onChange={(event) => {
            setPrice(event.target.value);
          }}
          type="text"
          price="price"
          value={price}
          required
        />
        <div className="postTitles">
          <input
            id="checkbox"
            className="postTitles"
            onChange={(event) => {
              setWillDeliver(event.target.value);
            }}
            type="checkbox"
            name="delivery"
            value={willDeliver}
          />
          will deliver
        </div>
        <button className="submitPost" type="submit">
          submit post
        </button>
      </form>
    </div>
  );
};
export default AddPosts;
