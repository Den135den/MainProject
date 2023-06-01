import React from 'react';
import img from '../../img/26.png';
import style from '../Page7/Page7.module.css';
import img2 from '../../img/f.png';
import img3 from '../../img/2.PNG';
import img4 from '../../img/3.PNG';

function Page7() {
  return React.createElement(
    'footer',
    { className: style.footer },
    React.createElement(
      'div',
      { className: style.container },
      React.createElement(
        'div',
        { className: style.footerInner },
        React.createElement(
          'div',
          { className: style.footerContent },
          React.createElement(
            'div',
            { className: style.footerText },
            'Location'
          ),
          React.createElement(
            'address',
            { className: style.footerAddress },
            '3481 Melrose Place Beverly Hills, CA 90210'
          )
        ),
        React.createElement(
          'div',
          { className: style.footerContent },
          React.createElement(
            'div',
            { className: style.footerText },
            'Share with Love'
          ),
          React.createElement(
            'div',
            { className: style.social2 },
            React.createElement(
              'a',
              { className: style.socialLink2, href: '#' },
              React.createElement('img', { className: style.socialImg, src: img2, alt: '' })
            ),
            React.createElement(
              'a',
              { className: style.socialLink3, href: '#' },
              React.createElement('img', { className: style.socialImg, src: img3, alt: '' })
            ),
            React.createElement(
              'a',
              { className: style.socialLink4, href: '#' },
              React.createElement('img', { className: style.socialImg, src: img4, alt: '' })
            )
          )
        ),
        React.createElement(
          'div',
          { className: style.footerContent },
          React.createElement(
            'div',
            { className: style.footerText },
            'About ActiveBox'
          ),
          React.createElement(
            'address',
            { className: style.footerAddress },
            'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec ullamcorper nulla non metus auctor fringilla.'
          )
        )
      )
    ),
    React.createElement(
      'div',
      { className: style.footerBackground },
      React.createElement(
        'div',
        { className: style.container },
        React.createElement('img', { className: style.textFooter, src: img, alt: '' })
      )
    )
  );
}

export default Page7;
