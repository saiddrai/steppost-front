import React, { useState, useEffect } from "react";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/solid";

import Slide from "../components/Slide";
import screenshot from "../assets/screenshot.png";
import creation from "../assets/creation.svg";
import planning from "../assets/planning.svg";
import searching from "../assets/searching.svg";
import deal from "../assets/deal.svg";
import axios from "axios";

// import images from content.slides in an array of objects that contains two images
const SlideSection = ({ slides }) => {
  const [slidesContent, setSlidesContent] = useState([
    {
      id: 1,
      component: (
        <Slide
          paragraph={slides.slides[0]}
          image1={screenshot}
          image2={screenshot}
          svg={creation}
          size={[50, 10]}
          position={[20, 20, 40, 20, 10, 60]}
          id={1}
        />
      ),
    },
    {
      id: 2,
      component: (
        <Slide
          paragraph={slides.slides[1]}
          image1={screenshot}
          image2={screenshot}
          svg={planning}
          size={[15, 70]}
          position={[15, 40, 10, 20, 10, 90]}
          id={2}
        />
      ),
    },
    {
      id: 3,
      component: (
        <Slide
          paragraph={slides.slides[2]}
          image1={screenshot}
          image2={screenshot}
          svg={searching}
          size={[60, 10]}
          position={[30, 10, 30, 10, 60, 10]}
          id={3}
        />
      ),
    },
    {
      id: 4,
      component: (
        <Slide
          paragraph={slides.slides[3]}
          image1={screenshot}
          image2={screenshot}
          svg={deal}
          size={[60, 10]}
          position={[30, 10, 30, 10, 60, 10]}
          id={4}
        />
      ),
    },
  ]);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide((prevSlide) =>
          prevSlide === slidesContent.length - 1 ? 0 : prevSlide + 1
        );
        setIsTransitioning(false);
      }, 500); // Adjust the duration of the transition here
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide((prevSlide) =>
          prevSlide === 0 ? slidesContent.length - 1 : prevSlide - 1
        );
        setIsTransitioning(false);
      }, 500); // Adjust the duration of the transition here
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide();
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [currentSlide]);

  return (
    <div className="relative">
      <div
        className={`flex items-center h-full justify-center w-full overflow-x-hidden lg:h-screen transition-all duration-700 ease-in-out ${
          isTransitioning ? "opacity-0" : "opacity-100"
        }`}
      >
        {slidesContent[currentSlide].component}
      </div>

      <div className="transform absolute translate-y-[-1rem] w-20 left-[50%] translate-x-[-2.5rem] flex justify-center transition-all duration-300 ">
        <div className="flex  space-x-2">
          {slidesContent.map((slide, index) => (
            <button
              key={slide.id}
              className={`h-2 w-2 rounded-full ${
                index === currentSlide ? "bg-purple" : "bg-light"
              } transition-all duration-300 transform ${
                index === currentSlide ? "scale-110" : ""
              }`}
              onClick={() => setCurrentSlide(index)}
            ></button>
          ))}
        </div>
      </div>

      <button
        className="absolute top-1/2 -translate-y-1/2 left-4 focus:outline-none"
        onClick={prevSlide}
      >
        <ChevronLeftIcon className="h-6 w-6 text-gray-800" />
      </button>
      <button
        className="absolute top-1/2 -translate-y-1/2 right-4 focus:outline-none"
        onClick={nextSlide}
      >
        <ChevronRightIcon className="h-6 w-6 text-gray-800" />
      </button>
    </div>
  );
};

export default SlideSection;
