import React from "react";
import s from './MyPosts.module.css';

export const MyPosts = () =>{
    return(
        <div className={s.content}>
            <div>
                <img
                    src="https://images.ctfassets.net/hrltx12pl8hq/3KWcqxPlvmgkpMS5VdjLAk/3cbdd812faf4b8c343b259656d31a0ee/rendered_15.jpg?fit=fill&w=480&h=270"
                    alt="nature_logo"/>
            </div>
            <div>
                <img
                    src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg"
                    alt="orange_logo" className={s.avatar_logo}/> + description
            </div>
            <div>
                My posts
                <div>
                    New post
                </div>
                <div>
                    <div className={s.item}>post 1</div>
                    <div>post 2</div>
                </div>
            </div>
        </div>
    );
}