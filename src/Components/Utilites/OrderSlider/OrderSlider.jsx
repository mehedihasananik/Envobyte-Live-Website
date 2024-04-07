"use client";
import "../../../app/globals.css";
import React, { useState, useEffect, useRef } from "react";
import ReactImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { IoMdClose } from "react-icons/io";
import Image from "next/image";

const OrderSlider = ({ sliders }) => {
  const galleryRef = useRef();
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Function to toggle fullscreen mode
  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      // If no element is fullscreen, make the gallery fullscreen
      galleryRef.current.fullScreen();
    } else {
      // If an element is already fullscreen, exit fullscreen mode
      exitFullScreen();
    }
  };
  const handleImageClick = () => {
    if (galleryRef.current) {
      galleryRef.current.fullScreen();
    }
  };

  // Function to exit fullscreen mode
  const exitFullScreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen(); // Safari
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen(); // IE11
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      // Update state based on fullscreen status
      setIsFullscreen(!!document.fullscreenElement);
    };

    // Add event listener for fullscreen change
    document.addEventListener("fullscreenchange", handleFullscreenChange);

    // Remove event listener on component unmount
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  // Array of images for the gallery
  const images = [
    {
      original: "/assets/orderSlider4.png",
      thumbnail: "/assets/orderSlider4.png",
      renderItem: (item) => (
        <div onClick={handleImageClick}>
          <Image
            width={1000}
            height={1000}
            alt="slider image"
            className={`w-[100%] ${
              isFullscreen ? "h-[100vh] " : "h-[200px] md:h-[498px]"
            }`}
            src={item.original}
          />
        </div>
      ),
    },
    {
      original: "/assets/orderSlider5.jpg",
      thumbnail: "/assets/orderSlider5.jpg",
      renderItem: (item) => (
        <div onClick={handleImageClick}>
          <Image
            width={1000}
            height={1000}
            alt="slider image"
            className={`w-[100%] ${
              isFullscreen ? "h-[100vh]" : "h-[200px] md:h-[600px]"
            }`}
            src={item.original}
          />
        </div>
      ),
    },
    {
      original: "/assets/orderSlider4.png",
      thumbnail: "/assets/orderSlider4.png",
      renderItem: (item) => (
        <div onClick={handleImageClick}>
          <Image
            width={600}
            height={700}
            alt="slider image"
            className={`w-[100%] ${
              isFullscreen ? "h-[100vh]" : "h-[200px] md:h-[600px]"
            }`}
            src={item.original}
          />
        </div>
      ),
    },
    {
      original: "/assets/orderSlider5.jpg",
      thumbnail: "/assets/orderSlider5.jpg",
      renderItem: (item) => (
        <div onClick={handleImageClick}>
          <Image
            width={600}
            height={700}
            alt="slider image"
            className={`w-[100%] ${
              isFullscreen ? "h-[100vh]" : "h-[200px] md:h-[600px]"
            }`}
            src={item.original}
          />
        </div>
      ),
    },
    {
      original: "/assets/orderSlider4.png",
      thumbnail: "/assets/orderSlider4.png",
      renderItem: (item) => (
        <div onClick={handleImageClick}>
          <Image
            width={600}
            height={700}
            alt="slider image"
            className={`w-[100%] ${
              isFullscreen ? "h-[100vh]" : "h-[200px] md:h-[600px]"
            }`}
            src={item.original}
          />
        </div>
      ),
    },
    {
      original: "/assets/orderSlider5.jpg",
      thumbnail: "/assets/orderSlider5.jpg",
      renderItem: (item) => (
        <div onClick={handleImageClick}>
          <Image
            width={600}
            height={700}
            alt="slider image"
            className={`w-[100%] ${
              isFullscreen ? "h-[100vh]" : "h-[200px] md:h-[600px]"
            }`}
            src={item.original}
          />
        </div>
      ),
    },
  ];

  return (
    <div className="bg-[#FCFCFC] md:p-8 rounded-[10px]">
      <div>
        <ReactImageGallery
          ref={galleryRef}
          items={images}
          showPlayButton={true}
          showFullscreenButton={true}
          slideInterval={10}
          slideOnThumbnailOver={true}
          renderCustomControls={() => (
            // Button to toggle fullscreen mode
            <button
              className="absolute right-[1%] top-[1%] z-[9999]"
              onClick={toggleFullScreen}
            >
              {/* Close icon when in fullscreen */}
              {isFullscreen && <IoMdClose className="cross-btn" />}
            </button>
          )}
        />
      </div>
    </div>
  );
};

export default OrderSlider;
