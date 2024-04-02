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

  const handleImageClick = () => {
    if (galleryRef.current) {
      galleryRef.current.fullScreen();
    }
  };
  const handleFullscreen = () => {
    if (!isFullscreen && galleryRef.current) {
      galleryRef.current.fullScreen();
    } else {
      exitFullScreen();
    }
    setIsFullscreen(!isFullscreen);
  };

  const exitFullScreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      /* Safari */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      /* IE11 */
      document.msExitFullscreen();
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  const images = sliders.map((slider) => ({
    original: slider.slider_image,
    thumbnail: slider.slider_image,
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
  }));

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
            <button
              className=" absolute right-[1%] top-[1%] z-[9999] "
              onClick={handleFullscreen}
            >
              {isFullscreen && <IoMdClose className=" cross-btn" />}
            </button>
          )}
        />
      </div>
    </div>
  );
};

export default OrderSlider;
