import React from "react";
import style from '../Headers.module.css'
import img from '../../../img/3.jpg'
import { Link } from "react-router-dom";
//import { useHistory } from 'react-router-dom';
let mainPage = [
    { name: 'A PERSONAL TRAINER' },
    { name: 'HELPS MAKE CHANGE SAFER' },
    { name: '& BETTER FOR YOUR BODY' },
]
let mainPage2 = mainPage.map((elemen) => <div className={style.fontH2}>{elemen.name}</div>)

export default function HOME()  {
    

        return (
            <div>
                <div className={style.zoomImage}>
                    <img src={img} alt="Зображення" width='100%' />
                    <div className={style.text}>
                        {mainPage2}
                        <button className={style.btn}>
                            <Link to='/registration' style={{textDecoration:'none', color:'green'}}>
                            Try now</Link></button>
                    </div>

                </div>

            </div>
        )
    }
