import React, { useState, useEffect } from "react";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/solid";

import Slide from "../components/Slide";

import axios from "axios";

// import images from content.slides in an array of objects that contains two images
const SlideSection = ({ slides, language }) => {
  const [slidesContent, setSlidesContent] = useState([]);
  const apiUrl = import.meta.env.VITE_APP_API_URL;
  const baseUrl = import.meta.env.VITE_APP_URL;
  useEffect(() => {
    axios.get(`${apiUrl}/slides?populate=*`).then((response) => {
      const newSlides = response.data.data.map((item, i) => ({
        id: i + 1,
        component: (
          <Slide
            title={
              language === "fr"
                ? item.attributes.localizations.data[0].attributes.title
                : item.attributes.title
            }
            description={
              language === "fr"
                ? item.attributes.localizations.data[0].attributes.description
                : item.attributes.description
            }
            image1={`${baseUrl}${item.attributes.image1.data.attributes.url}`}
            image2={`${baseUrl}${item.attributes.image2.data.attributes.url}`}
            svg={item.attributes.svg}
            id={i + 1}
            size={[60, 10]}
            position={[30, 10, 30, 10, 60, 10]}
          />
        ),
      }));
      setSlidesContent(newSlides);
    });
  }, []);

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
    <>
      {slidesContent.length && (
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
      )}
    </>
  );
};

export default SlideSection;
