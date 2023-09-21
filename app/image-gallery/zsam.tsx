/* eslint-disable @next/next/no-img-element */
"use client";
import galleryData from "@/Data/gallery";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "react-toastify";

const GalleryPage = () => {
  const { data: session } = useSession();
  const router = useRouter();

  if (session === null) {
    router.push("/");
    //   setTimeout(() => toast.success("Logout Succssfully ✅ "), 1000);
    toast.success("Logout Succssfully ✅ ");
  }

  return (
    <div className="py-5">
      <>
        <div className="masonry-3-col ">
          {galleryData.map(({ imageUrl }, index) => (
            <div
              key={index}
              className="break-inside border rounded-lg p-3 mb-5"
            >
              <span className="overflow-hidden group rounded-lg">
                <img
                  className="pic w-full rounded-lg"
                  src={imageUrl}
                  alt="imgaes gallery"
                  loading="lazy"
                />
              </span>
            </div>
          ))}
        </div>
      </>
    </div>
  );
};

export default GalleryPage;
