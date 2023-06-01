import React, { Component } from 'react'
//import  './Page4.css'
import style from '../Page6/Page6.module.css'
import img from '../../img/23.png'
import img2 from '../../img/24.png'
import img3 from '../../img/25.png'

export default class Page6 extends Component {
    render() {


        return (
            <div className={style.container}>
                <div className={style.card}>
                    <div className={style.cardImg}>
                        <img src={img} alt='Ico' className={style.icoContainer} />
                        <p className={style.cardH}>Dumbbells are sports equipment used for physical fitness, muscle development, and maintaining overall body shape. Dumbbells consist of two weights placed at the ends of a short handle. The weight of dumbbells can range from a few pounds to several hundred pounds, depending on the sporting goals and the athlete's level of training</p>
                    </div>
                </div>
                <div className={style.card}>
                    <div className={style.cardImg}>
                        <img src={img2} alt='Ico' className={style.icoContainer} />
                        <p className={style.cardH}>Kettlebells are sports equipment used to develop muscle mass, increase strength and endurance. Kettlebells consist of a ball-shaped metal head and a handle with a secure grip. The weight of kettlebells can range from a few kilograms to several tens of kilograms, depending on the athlete's level of training and sporting goals</p>
                    </div>
                </div>
                <div className={style.card}>
                    <div className={style.cardImg}>
                        <img src={img3} alt='Ico' className={style.icoContainer} />
                        <p className={style.cardH}>Muscles are the part of our body that is responsible for movement and support of the skeleton. Each part of our body has its own muscles that can be developed and strengthened through exercise and training. Working on muscles can lead to different results, depending on your goals and individual characteristics</p>
                    </div>
                </div>
            </div>
        )
    }
}