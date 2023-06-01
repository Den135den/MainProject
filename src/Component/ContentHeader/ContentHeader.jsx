import React, { Component } from "react";
import Logo from '../../img/header.jpg'
import style from './ContentHeader.module.css'



export default class ContentHeader extends Component {
    render() {
        return (
           <div>
              <div>
                <div className={style.siteMain}>
                  <img className={style.mainImage} src={Logo} alt='Logo'/>
                </div>
              </div>
           </div>
        )

    }
} 