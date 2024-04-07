"use client";
import "../../../app/globals.css";
import React, { useState, useEffect, useRef } from "react";
import ReactImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { IoMdClose } from "react-icons/io";

const OrderSlider = ({ sliders }) => {
  const galleryRef = useRef();
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [imageHeight, setImageHeight] = useState(null);
  const [images, setImages] = useState([
    {
      original: "/assets/orderSlider1.png",
      thumbnail: "/assets/orderSmSlider1.png",
    },
    {
      original: "/assets/orderSlider2.png",
      thumbnail: "/assets/orderSmSlider2.png",
    },
    {
      original: "/assets/orderSlider3.png",
      thumbnail: "/assets/orderSmSlider3.png",
    },
    {
      original: "/assets/fiver.png",
      thumbnail: "/assets/fiversm.png",
    },
  ]);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const currentIndex = galleryRef.current.getCurrentIndex();
      const currentImage = images[currentIndex];
      const img = new Image();
      img.src = currentImage.original;

      img.onload = () => {
        const naturalHeight = img.naturalHeight;
        setImageHeight(naturalHeight);
      };
    };

    handleResize(); // Call initially

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [images]);

  const handleImageClick = () => {
    if (galleryRef.current) {
      const currentIndex = galleryRef.current.getCurrentIndex();
      const currentImage = images[currentIndex];

      const img = new Image();
      img.src = currentImage.original;

      img.onload = () => {
        const naturalWidth = img.naturalWidth;
        const naturalHeight = img.naturalHeight;

        console.log("Natural Width:", naturalWidth);
        console.log("Natural Height:", naturalHeight);

        if (!isFullscreen) {
          galleryRef.current.fullScreen();
          setIsFullscreen(true);
        }
      };
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
    setIsFullscreen(false);
  };

  const renderItem = (item) => {
    return (
      <div
        style={{
          height: isFullscreen ? "100vh" : "600px",
          width: isFullscreen ? "100%" : "100%",
          overflowY:
            isFullscreen && imageHeight && imageHeight > 900
              ? "scroll"
              : "hidden",
        }}
      >
        <div
          style={{
            maxHeight: isFullscreen && imageHeight > 900 ? "900px" : "none",
          }}
        >
          <img
            src={item.original}
            alt=""
            style={{
              width: isFullscreen ? "100%" : "100%",
              height: isFullscreen ? "auto" : "100%",
              objectFit: isFullscreen ? "contain" : "cover",
              objectPosition: "center",
            }}
          />
        </div>
      </div>
    );
  };

  return (
    <div className="bg-[#FCFCFC] md:p-8 rounded-[10px]">
      <div>
        <ReactImageGallery
          ref={galleryRef}
          items={images}
          showPlayButton={true}
          showFullscreenButton={true}
          slideDuration={1500}
          slideOnThumbnailOver={true}
          thumbnailWidth={50}
          thumbnailHeight={50}
          renderCustomControls={() => (
            <button
              className="absolute right-[1%] top-[1%] z-[9999]"
              onClick={handleFullscreen}
            >
              {isFullscreen && <IoMdClose className="cross-btn" />}
            </button>
          )}
          renderItem={(item) => renderItem(item)} // Use a callback function to pass item
          onClick={handleImageClick}
        />
      </div>
    </div>
  );
};

export default OrderSlider;
