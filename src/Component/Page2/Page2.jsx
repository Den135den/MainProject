import React, { Component } from 'react';
import style from '../Page2/Page2.module.css';
import img from '../../img/4.jpg';
import { masData2 } from '../../data.js';

export default class Page2 extends Component {
  render() {
    return (
      <div style={{ paddingTop: '80px' }}>
        <div
          style={{
            textAlign: 'center',
            fontSize: '50px',
            paddingBottom: '30px',
            fontFamily: 'Arial, sans-serif',
            fontWeight: '900',
            textDecoration: 'underline',
          }}
        >
          TIPS FOR RESILIENCE
        </div>
        <div className={style.contentMain}>
          <div className={style.contentWidth}>
            <img src={img} alt="Картинка" className={style.img} />
          </div>
          <div style={{ display: 'grid', placeItems: 'center' }}>
            <div className={style.contentWidth}>
              <div className={style.content}>
                <div className={style.contentText}>
                  <div style={{ fontWeight: '900' }}>
                    {this.props.title.toUpperCase()}
                  </div>
                  <ol>{masData2}</ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
