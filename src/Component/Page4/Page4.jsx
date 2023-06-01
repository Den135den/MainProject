import React, { Component } from 'react'
//import  './Page4.css'
import style from '../Page4/Page4.module.css'
import img from '../../img/10.jpg'
import img2 from '../../img/11.jpg'
import img3 from '../../img/12.jpg'
import img4 from '../../img/13.jpg'
import img5 from '../../img/14.jpg'
import img6 from '../../img/15.jpg'
import img7 from '../../img/16.jpg'
import img8 from '../../img/17.jpg'
export default class Page4 extends Component {
    render() {


        return (
            <div style={{ paddingTop: '20px' }}>
                 <div style={{textAlign:'center', 
                 fontSize:'50px', paddingBottom:'30px', fontFamily:'Arial, sans-serif', 
                 fontWeight:'900', textDecoration:'underline'}}>GALLERY</div>
                <div className={style.work}>
                    <div className={style.workInner}>
                        <div className={style.workContent}>
                            <img className={style.workImg} src={img} alt="" />
                            <div className={style.workIco}>
                                <div className={style.workFor}>
                                    <div className={style.workTitle}>Project Name</div>
                                    <div className={style.workText}>User Interface Design</div>
                                </div>
                            </div>
                        </div>


                        <div className={style.workContent}>
                            <img className={style.workImg} src={img2} alt="" />
                            <div className={style.workIco}>
                                <div className={style.workFor}>
                                    <div className={style.workTitle}>Project Name</div>
                                    <div className={style.workText}>User Interface Design</div>
                                </div>
                            </div>
                        </div>



                        <div className={style.workContent}>
                            <img className={style.workImg} src={img3} alt="" />
                            <div className={style.workIco}>
                                <div className={style.workFor}>
                                    <div className={style.workTitle}>Project Name</div>
                                    <div className={style.workText}>User Interface Design</div>
                                </div>
                            </div>
                        </div>


                        <div className={style.workContent}>
                            <img className={style.workImg} src={img4} alt="" />
                            <div className={style.workIco}>
                                <div className={style.workFor}>
                                    <div className={style.workTitle}>Project Name</div>
                                    <div className={style.workText}>User Interface Design</div>
                                </div>
                            </div>
                        </div>

                        <div className={style.workContent}>
                            <img className={style.workImg} src={img5} alt="" />
                            <div className={style.workIco}>
                                <div className={style.workFor}>
                                    <div className={style.workTitle}>Project Name</div>
                                    <div className={style.workText}>User Interface Design</div>
                                </div>
                            </div>
                        </div>

                        <div className={style.workContent}>
                            <img className={style.workImg} src={img6} alt="" />
                            <div className={style.workIco}>
                                <div className={style.workFor}>
                                    <div className={style.workTitle}>Project Name</div>
                                    <div className={style.workText}>User Interface Design</div>
                                </div>
                            </div>
                        </div>


                        <div className={style.workContent}>
                            <img className={style.workImg} src={img7} alt="" />
                            <div className={style.workIco}>
                                <div className={style.workFor}>
                                    <div className={style.workTitle}>Project Name</div>
                                    <div className={style.workText}>User Interface Design</div>
                                </div>
                            </div>
                        </div>

                        <div className={style.workContent}>
                            <img className={style.workImg} src={img8} alt="" />
                            <div className={style.workIco}>
                                <div className={style.workFor}>
                                    <div className={style.workTitle}>Project Name</div>
                                    <div className={style.workText}>User Interface Design</div>
                                </div>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
        )
    }
}