import React, { Component } from 'react';
import  '../Page2/Page2.css';
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
        <div className= "contentMain">
          <div className="contentWidth">
            <img src={img} alt="Картинка" className="img"/>
          </div>
          <div style={{ display: 'grid', placeItems: 'center' }}>
            <div className="contentWidth">
              <div className="content">
                <div className="contentText">
                  <div style={{ fontWeight: '900' }} className='textTitle'>
                    {this.props.title.toUpperCase()}
                  </div>
                  <ol className="textContent">{masData2}</ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
