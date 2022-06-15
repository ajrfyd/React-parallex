import React, { useEffect, useState } from "react";
import img1 from './assets/pexels-markus-spiske-1089438.jpg';
import img2 from './assets/sponge.jpeg';
import img3 from './assets/window.webp';

const Parallax = () => {
  const [position, setPosition] = useState(0);

  const onScroll = () => {
    setPosition(window.scrollY);
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return ( ) => {
      window.removeEventListener('scroll', onScroll);
    }
  }, [])

  return (
    <div className='wrapper'>
      <div className='bg bg1' style={{ backgroundPositionY: position / 2 }}>
        Welcome
      </div>
      <div className="bg bg2" style={{ backgroundPositionY: position / -3 }}>
        <div>Happy new year</div>
      </div>
      <p className='desc' style={{ transform: `translateX(${-position}px)`}}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error aut saepe modi hic eos odit facere totam aliquid dolorem non?
      </p>
      <p className='desc2' style={{ transform: `translateX(${position}px)`}}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit tempora libero iste doloribus fugit assumenda, perspiciatis ut distinctio vel ullam?
      </p>
      <p className='desc3' style={{ opacity: (position - 700) / 50 }}>
        Lorem ipsum dolor sit amet.
      </p>
      <p className='desc3' style={{ opacity: (position - 830) / 50 }}> Lorem ipsum dolor sit amet.</p>
      <p className='desc3' style={{ opacity: (position - 960) / 50 }}>Lorem ipsum dolor sit.</p>
      <p className='desc3' style={{ opacity: (position - 1090) / 50 }}>Lorem ipsum dolor sit amet consectetur.</p>
      <img src={img1} alt="" className='item' style={{ transform: `translateY(${position / 2}px)`}}/>
      <img src={img2} alt="" className='item item_bg' style={{ transform: `translatex(${position / 4}px)`}}/>
    </div>
  )
}

export default Parallax;