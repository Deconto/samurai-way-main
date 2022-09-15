import React from "react";
import s from './Post.module.css';


type PostType = {
    message: string
    likesCount: string
}

export const Post: React.FC<PostType> = (props) => {
    return (
        <div>
            <div className={s.item}>
                <img
                    src="https://www.adobe.com/express/create/media_127a4cd0c28c2753638768caf8967503d38d01e4c.jpeg?width=400&format=jpeg&optimize=medium"
                    alt="logo"/>
                {props.message}
                <div>
                    <span>Likes </span> {props.likesCount}
                </div>
            </div>
        </div>
    );
}