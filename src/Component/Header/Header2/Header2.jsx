import React, { Component } from "react";
import style from '../Headers.module.css'
import Nav from '.././Nav/Nav'

export default class Header2 extends Component {
    render() {
        return (
            <div className={style.header}>
                 <h1 style={{fontFamily:'Impact, Charcoal, sans-serif'} }className={style.textMain}>New Fire in Life</h1>
                 <Nav/>
  
            </div>
        )
    }

}
