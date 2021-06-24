import { useState } from "react";
import {Step, Scrollama } from "react-scrollama";
import './App.css';

function App() {

  const images = [
    {
      id: 0,
      src: "image_one.jpg",
      active: true,
      title: "Photo by Markus Spiske on Unsplash",
      alt: "Markus Spiske on Unsplash"
    },
    {
      id: 1,
      src: "image_two.jpg",
      active: false,
      title: "Photo by Nour Betar on Unsplash",
      alt: "Nour Betar on Unsplash"
    },
    {
      id: 2,
      src: "image_three.jpg",
      active: false,
      title: "Photo by Nina Hill on Unsplash",
      alt: "Nina Hill on Unsplash"
    }
  ];

  const [slides, updateSlides] = useState(images);

  function onStepExit(event) {
    console.log("NNN onExit: ", event);
  }

  function onScrollProgress(event) {
    console.log("NNN progress: ", event);
  }

  function onScrollEvent(event) {
    console.log("NNN event: ", event);
    const imagesChanged = slides.map((slide) => {
      const copySlide = {...slide};
      if (event.data === copySlide.id) {
        copySlide.active = true;
      } else {
        copySlide.active = false;
      }

      return copySlide
    });

    updateSlides(imagesChanged);
  }

  function renderSlides() {
    return slides.map((slide, index) =>(
      <Step data={slide.id}
        key={slide.id}
        >
        <div className="slideContainer">
          <h1> This is the step {index}</h1>
          <img className={`imgScroll ${slide.active ? 'active': ''}`} src={slide.src} title={slide.title} alt={slide.alt}/>
        </div>
      </Step>
    ))
  }

  return (
    <div className="App">
     <Scrollama onStepEnter={onScrollEvent}
        offset={0.7}
        progress
        debug={true}
        onStepProgress={onScrollProgress}
        onStepExit={onStepExit}>
       {renderSlides()}
     </Scrollama>
    </div>
  );
}

export default App;
