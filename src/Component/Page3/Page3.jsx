import img1 from '../../img/5.jpg'
import img2 from '../../img/6.jpg'
import img3 from '../../img/7.jpg'
import img4 from '../../img/8.jpg'
import img5 from '../../img/9.jpg'
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // імпорт стилів слайдера

const Page3 = (props) => {
    return (
        <div style={{ paddingTop: '50px' }}>
            <div style={{ textAlign: 'center', fontSize: '50px', paddingBottom: '30px', fontFamily: 'Arial, sans-serif', 
        fontWeight: '900', textDecoration: 'underline' }}>
                {props.title.toUpperCase()}</div>
            <Carousel autoPlay interval={1000} infiniteLoop>
                <div>
                    <img src={img1} alt="Slide 1" />
                    <p className="legend">Slide 1</p>
                </div>
                <div>
                    <img src={img2} alt="Slide 2" />
                    <p className="legend">Slide 2</p>
                </div>
                <div>
                    <img src={img3} alt="Slide 3" />
                    <p className="legend">Slide 3</p>
                </div>
                <div>
                    <img src={img4} alt="Slide 4" />
                    <p className="legend">Slide 4</p>
                </div>
                <div>
                    <img src={img5} alt="Slide 5" />
                    <p className="legend">Slide 5</p>
                </div>
            </Carousel>
        </div>

    );
}

export default Page3;
