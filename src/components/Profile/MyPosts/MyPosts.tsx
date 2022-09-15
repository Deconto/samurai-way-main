import React from "react";
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add Post</button>
            </div>
            <Post message="Hi how are you?" likesCount='0'/>
            <Post message="It's my first post" likesCount='25'/>
        </div>
    );
}