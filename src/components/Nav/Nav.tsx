import React from "react";
import s from './Nav.module.css';

type SideInfo = {
    id: number
    name: string
}

type SideType = {
    side: Array<SideInfo>
}


export const Nav: React.FC<SideType> = (props) => {
    return (
        <nav className={s.nav}>
            <div className={`${s.item} ${s.active}`}>
                <a>{props.side[0].name}</a>
            </div>
            <div className={s.item}>
                <a>{props.side[1].name}</a>
            </div>
            <div className={s.item}>
                <a>{props.side[2].name}</a>
            </div>
            <div className={s.item}>
                <a>{props.side[3].name}</a>
            </div>
            <div className={s.item}>
                <a>{props.side[4].name}</a>
            </div>
        </nav>
    );
}