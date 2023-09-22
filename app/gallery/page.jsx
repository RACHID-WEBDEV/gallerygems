/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState, useEffect, useRef } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

import galleryData from "@/Data/gallery";
import SearchComponent from "./SearchComponent";
import NotFound from "@/components/NotFound";
import Button from "@/components/Button";

const Gallery = () => {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session === null) {
      router.push("/");
      toast.success("Logout Successfully ✅ ");
    }
  }, [router, session]);
  const [isLoading, setIsLoading] = useState(true);

  let [images, setImages] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    setImages(galleryData.sort((a, b) => a.id - b.id));

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  //  set boundary for dragging something tha inst an image

  const [firstIndex, setFirstIndex] = useState("");
  const [isScrollEnabled, setScrollEnabled] = useState(true);
  const imgRef = useRef(null);

  const handleTouchStart = (e, index) => {
    setScrollEnabled(false);
    setFirstIndex(index);
  };

  const handleTouchEnd = (e, index) => {
    setScrollEnabled(true);
    const el = e.target;
  };

  const handleTouchStartGallery = (e) => {
    if (e.nodeName === "IMG") {
      setFirstIndex(e.target.getAttribute("i"));
      // console.log(e.target.getAttribute("src"));
      // console.log(e);
    }
  };
  const handleTouchEndGallery = (e, index) => {
    const elementAtPoint = document.elementFromPoint(
      e.changedTouches[0].clientX,
      e.changedTouches[0].clientY
    );
    // console.log(elementAtPoint.tagName.toUpperCase());

    if (elementAtPoint.tagName.toUpperCase() === "IMG") {
      const tempIndex = elementAtPoint.getAttribute("i");
      const updatedImages = [...images];
      const temp = updatedImages[firstIndex];
      updatedImages[firstIndex] = updatedImages[tempIndex];
      updatedImages[tempIndex] = temp;
      setImages(updatedImages);
    }
    // console.log("not dropped on image");
  };

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData("index", index);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, newIndex) => {
    e.preventDefault();
    const oldIndex = e.dataTransfer.getData("index");
    const updatedImages = [...images];
    const temp = updatedImages[oldIndex];
    // console.log(temp, updatedImages[newIndex], "things to swap");
    updatedImages[oldIndex] = updatedImages[newIndex];
    updatedImages[newIndex] = temp;
    setImages(updatedImages);
    // console.log(images);
  };

  const handleWindowTouchMove = (e) => {
    if (!isScrollEnabled) {
      e.preventDefault();
      // console.log(e);
    }
  };

  // Add the touchmove event listener to the window
  useEffect(() => {
    window.addEventListener("touchmove", handleWindowTouchMove, {
      passive: false,
    });

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("touchmove", handleWindowTouchMove);
    };
  }, [isScrollEnabled]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredData = images.filter((item) =>
    item?.tag.toLowerCase().includes(searchTerm.toLowerCase())
  );
  // console.log("image filteredData", filteredData);

  const filterItem = (tag) => {
    const updateItem = galleryData.filter((item) => item.tag === tag);
    setImages(updateItem);
  };

  return (
    <div className="xl:container mx-auto flex flex-col justify-center relative">
      <div className=" py-10 px-4 md:px-10 lg:px-96">
        <SearchComponent value={searchTerm} onChange={handleSearch} />
      </div>
      <div className=" flex items-center justify-center gap-3 flex-wrap pb-5 lg:pb-10">
        <Button onClick={() => setImages(galleryData)}>All</Button>
        <Button color="secondary" onClick={() => filterItem("animal")}>
          Animal
        </Button>
        <Button color="secondary" onClick={() => filterItem("africa woman")}>
          Africa Woman
        </Button>
        <Button color="secondary" onClick={() => filterItem("nature")}>
          Nature
        </Button>
        <Button color="secondary" onClick={() => filterItem("3d characters")}>
          3d characters
        </Button>
        <Button color="secondary" onClick={() => filterItem("woman")}>
          Woman
        </Button>
        <Button color="secondary" onClick={() => filterItem("art")}>
          Art
        </Button>
        <Button color="secondary" onClick={() => filterItem("africa man")}>
          Africa Man
        </Button>
      </div>
      {isLoading ? (
        <div className="isLoading h-[80vh] w-[100vw] flex justify-center items-center object-fill">
          <div className="spinner"></div>
        </div>
      ) : (
        <>
          {filteredData.length === 0 ? (
            <NotFound
              title="tag"
              link="/gallery"
              onClick={() => setSearchTerm("")}
            />
          ) : (
            <div
              // className="masonry-3-col  mb-20"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4  mb-20"
              onTouchStart={(e) => handleTouchStartGallery(e)}
              onTouchEnd={(e) => handleTouchEndGallery(e)}
            >
              {filteredData.map(({ imageUrl, tag }, index) => (
                <div
                  key={index}
                  className="break-inside border rounded-lg p-3 mb-5"
                >
                  <div className="overflow-hidden group  rounded-lg relative">
                    <img
                      className="pic w-full h-[380px] rounded-lg"
                      src={imageUrl}
                      alt="imgaes gallery"
                      loading="lazy"
                      i={index}
                      ref={imgRef}
                      draggable="true"
                      onDragStart={(e) => handleDragStart(e, index)}
                      onDragOver={handleDragOver}
                      onDrop={(e) => handleDrop(e, index)}
                      // onTouchStart={(e) => handleTouchStart(e, index)}
                      // onTouchEnd={(e) => handleTouchEnd(e, index)}
                    />
                    <div className=" absolute bottom-3 left-3 p-1 rounded-full px-3 bg-defaultColor text-white">
                      {tag}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Gallery;
