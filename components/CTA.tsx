import React from "react";
import Button from "./Button";
import Link from "next/link";

const CTA = () => {
  return (
    <section className="my-16 ">
      <div className="container m-auto px-6 text-center md:px-12 lg:px-20">
        <div className="relative mx-auto flex h-56 w-56 items-center justify-center">
          <div className="it absolute inset-0 flex flex-wrap opacity-40 blur-3xl dark:opacity-70">
            <div aria-hidden="true" className="h-1/2 w-1/2 bg-defaultColor" />
            <div aria-hidden="true" className="h-1/2 w-1/2 bg-purple-200" />
            <div
              aria-hidden="true"
              className="h-1/2 w-1/2 rounded-bl-full bg-defaultColor/50"
            />
            <div
              aria-hidden="true"
              className="h-1/2 w-1/2 rounded-br-full bg-secondaryLight"
            />
          </div>
        </div>
        <div className="relative -mt-24">
          <h2 className="mb-8 text-4xl font-bold text-gray-900 dark:text-white md:text-6xl">
            Explore the Artistry of Images
          </h2>
          <p className="mb-12 mt-6 text-gray-600 dark:text-gray-300 md:mx-auto max-w-2xl">
            Saepe nulla ab nobis itaque corporis fuga illo doloribus sequi esse
            aspernatur impedit nihil quisquam, voluptates placeat architecto .
          </p>
          <div className="flex items-center justify-center">
            <Link href="/register">
              <Button>Get Started Now!</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
