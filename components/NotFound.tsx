/* eslint-disable @next/next/no-img-element */
import React from "react";
import Button from "./Button";
import Link from "next/link";

const NotFound = ({
  link,
  title,
  onClick,
}: {
  link?: string;
  title?: string;
  onClick?: any;
}) => {
  return (
    <section className="relative py-16 dark:bg-jacarta-800 md:py-24">
      <div className="flex items-center justify-center">
        <div className="mx-auto max-w-lg text-center">
          {/* <img
            src="/gallery /notfound.avif"
            alt=""
            className="mb-16 inline-block w-60 h-60"
          /> */}
          <h1 className="mb-6 capitalize text-4xl text-stone-900 font-bold md:text-6xl">
            {title} Not Found!
          </h1>
          <p className="mb-12 text-lg leading-normal text-gray-600">
            Oops! The {title} you are looking for does not exist. It might have
            been moved or deleted.
          </p>
          <Link href={`${link}`} className="flex items-center justify-center">
            <Button onClick={onClick}> Navigate Back </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
export default NotFound;
