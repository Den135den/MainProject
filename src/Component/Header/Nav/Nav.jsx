import React, { Component } from "react";
import style from '../Headers.module.css'


export default class Nav extends Component {
    render() {

     const menu = [
        {name:'HOME', id:1},
        {name:'OUR TEAM', id:2},
        {name:'INFORMATION', id:3},
        {name:'REGISTRATION', id:4},
     ]
    
     const menuLink = menu.map((value, id)=><div><a className={style.navLink}  
     key={id} href={"/"+value.name.toLocaleLowerCase()} >{value.name}</a></div>)
        return (
            <div className={style.nav}>
               {menuLink}
            </div>
        )
    }

}
