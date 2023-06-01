import React, { Component } from 'react'
import style from '../Page5/Page5.module.css'

export default class Page5 extends Component {
    constructor(props) {
        super(props);
        this.lunch()
        this.state = {
            value: (new Date()).toLocaleTimeString()
        }
    }

    lunch() {
        setInterval(() => {
            this.setState({ value: (new Date().toLocaleTimeString()) })
        }, 1000)
    }


    render() {
        return (
            <div style={{ paddingTop: '80px' }}>
                <div className={style.timerContainer}>
                    <div className={style.timer}>
                    {this.state.value}
                    </div>
                </div>

            </div>
        )
    }

}