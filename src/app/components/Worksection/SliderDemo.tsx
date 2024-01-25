import React, { useEffect } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function SliderDemo() {

//     let isDown = false;
// let startX:any;
// let scrollLeft:any;
// let slider:any;
// const end = () => {
// 	isDown = false;
//   slider?.classList.remove('active');
// }

// const start = (e:any) => {
//   isDown = true;
//   slider?.classList.add('active');
// //   startX = e.pageX || e.touches[0].pageX - slider?.offsetLeft;
// //   scrollLeft = slider?.scrollLeft;	
// }

// const move = (e:any) => {
// 	if(!isDown) return;

//   e.preventDefault();
// //   const x = e.pageX || e.touches[0].pageX - slider?.offsetLeft;
// //   const dist = (x - startX);
// //   slider?.scrollLeft = scrollLeft - dist;
// }


// useEffect(()=>{
//  slider = document.querySelector('.items');
//  console.log("slider",slider)

//     slider?.addEventListener('mousedown', start);
// 	slider?.addEventListener('touchstart', start);

// 	slider?.addEventListener('mousemove', move);
// 	slider?.addEventListener('touchmove', move);

// 	slider?.addEventListener('mouseleave', end);
// 	slider?.addEventListener('mouseup', end);
// 	slider?.addEventListener('touchend', end);
// })


const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    // <div className="wrapper relative">
    // <ul className="items relative overflow-hidden whitespace-nowrap cursor-pointer">
    //   <li className="item inline-block bg-primary w-[400px] h-[250px] p-4 ml-5 select-none" onDrag={()=>{console.log("hi")}}>0</li>
    //   <li className="item inline-block bg-primary w-[400px] h-[250px] p-4 ml-5 select-none">1</li>
    //   <li className="item inline-block bg-primary w-[400px] h-[250px] p-4 ml-5 select-none">2</li>
    //   <li className="item inline-block bg-primary w-[400px] h-[250px] p-4 ml-5 select-none" onDrag={()=>{console.log("hi3")}}>3</li>
    //   <li className="item inline-block bg-primary w-[400px] h-[250px] p-4 ml-5 select-none">4</li>
    //   <li className="item inline-block bg-primary w-[400px] h-[250px] p-4 ml-5 select-none">5</li>
    //   <li className="item inline-block bg-primary w-[400px] h-[250px] p-4 ml-5 select-none">6</li>
    //   <li className="item inline-block bg-primary w-[400px] h-[250px] p-4 ml-5 select-none">7</li>
    //   <li className="item inline-block bg-primary w-[400px] h-[250px] p-4  ml-5 select-none">8</li>
    //   <li className="item inline-block bg-primary w-[400px] h-[250px] p-4 ml-5 select-none">9</li>
    // </ul></div>

    <div>
    <h2> Single Item</h2>
    <Slider {...settings} draggable={true} >
      <div className='w-full h-[250px] bg-primary'>
        <h3>sfgdvb</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider>
  </div>
  )
}
