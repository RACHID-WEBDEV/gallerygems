/* eslint-disable @next/next/no-img-element */
import { FastIcon } from "@/public/SvgIcons";
import React from "react";

const Feature = () => {
  return (
    <div className="relative pt-32 md:pt-44 ">
      <div className="mx-auto max-w-6xl px-4 md:px-12 lg:px-6 xl:px-0">
        <div className="mx-auto md:w-3/5">
          <h2 className="text-center text-3xl font-bold text-gray-900 dark:text-white md:text-4xl lg:text-5xl">
            Picture Perfect Where Creativity Meets Captivation
          </h2>
          <p className="mt-4 text-center text-gray-600 dark:text-gray-300">
            apiente optio repellendus atque illum odio! Fugiat at expedita
            deserunt dolorum molestias.
          </p>
        </div>

        <div className="mt-16 md:mt-20">
          <div className="relative grid rounded-3xl border border-gray-200 p-1 dark:border-gray-800 lg:grid-cols-2">
            <div className="absolute inset-0 hidden h-max dark:block lg:my-auto">
              <div
                aria-hidden="true"
                className="grid grid-cols-2 -space-x-52 opacity-50 dark:opacity-70 2xl:mx-auto 2xl:max-w-6xl"
              >
                <div className="h-60 bg-gradient-to-br from-defaultColor to-purple-400 blur-3xl dark:from-blue-700"></div>
                <div className="h-72 rounded-full bg-gradient-to-r from-cyan-400 to-sky-300 blur-3xl dark:from-transparent dark:to-indigo-600"></div>
              </div>
            </div>
            <div>
              <div className="relative flex h-full flex-col items-center justify-center gap-6 p-8 py-16 lg:py-8">
                <img
                  className="w-12"
                  src="/favIcon.png"
                  alt="primebase icon illustration"
                  width="512"
                  height="512"
                  loading="lazy"
                />
                <div className="mx-auto text-center sm:w-3/5">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                    User Interaction and Engagement
                  </h2>
                  <p className="mt-3 text-gray-600 dark:text-gray-400">
                    Tailor-made payment plans that align with borrowers
                    financial situations, allowing them to choose from various
                    repayment options such as fixed or flexible installments.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative grid overflow-hidden rounded-[1.25rem] bg-gray-100 p-1 sm:grid-cols-2">
              <div className="flex group flex-col gap-6 rounded-2xl p-8 transition duration-300 hover:bg-defaultColor/10 hover:shadow-2xl hover:shadow-gray-600/10 cursor-pointer">
                <div className="flex h-10 w-10 rounded border border-gray-200 dark:border-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="m-auto h-6 w-6 text-gray-700 group-hover:text-defaultColor dark:text-white"
                  >
                    <path
                      d="M19 16V6.5c0-1.1-.9-2-2-2h-5.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="m14 2-3 2.5L14 7M19 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM5 8v9.5c0 1.1.9 2 2 2h5.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="m10 22 3-2.5-3-2.5M5 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Intuitive Navigation
                  </h2>
                  <p className="mt-3 text-gray-600 dark:text-gray-400">
                    Dolorem aliquid officiis quae ipsum nobis libero alias Iure
                    nobis dicta.
                  </p>
                </div>
              </div>

              <div className="flex group flex-col gap-6 rounded-2xl p-8 transition duration-300 hover:bg-defaultColor/10 hover:shadow-2xl hover:shadow-gray-600/10 cursor-pointer">
                <div className="flex h-10 w-10 rounded border border-gray-200 dark:border-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    className="m-auto h-6 w-6 text-gray-700 group-hover:text-defaultColor dark:text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeMiterlimit="10"
                      strokeWidth="1.5"
                      d="M21 2H9c-.6 0-1 .4-1 1v3c0 .6.4 1 1 1h12c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1zm-9 15H7v5h5v-5zM7 9.5H2v5h5v-5zm11 .1H9.5v4.7H18V9.6z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                    High-Quality Images
                  </h2>
                  <p className="mt-3 text-gray-600 dark:text-gray-400">
                    Dolorem aliquid officiis quae ipsum nobis libero alias Iure
                    nobis dicta.
                  </p>
                </div>
              </div>

              <div className="flex group flex-col gap-6 rounded-2xl p-8 transition duration-300 hover:bg-defaultColor/10 hover:shadow-2xl hover:shadow-gray-600/10 cursor-pointer">
                <div className="flex h-10 w-10 rounded border border-gray-200 dark:border-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    className="m-auto h-6 w-6 text-gray-700 group-hover:text-defaultColor dark:text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeMiterlimit="10"
                      strokeWidth="1.5"
                      d="M14.32 19.07c0 .61-.4 1.41-.91 1.72L12 21.7c-1.31.81-3.13-.1-3.13-1.72v-5.35c0-.71-.4-1.62-.81-2.12L4.22 8.47c-.51-.51-.91-1.41-.91-2.02V4.13c0-1.21.91-2.12 2.02-2.12h13.34c1.11 0 2.02.91 2.02 2.02v2.22c0 .81-.51 1.82-1.01 2.32"
                    ></path>
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M16.07 16.52a3.2 3.2 0 100-6.4 3.2 3.2 0 000 6.4zm3.8.6l-1-1"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Advanced Filters
                  </h2>
                  <p className="mt-3 text-gray-600 dark:text-gray-400">
                    Dolorem aliquid officiis quae ipsum nobis libero alias Iure
                    nobis dicta.
                  </p>
                </div>
              </div>

              <div className="flex group flex-col gap-6 rounded-2xl p-8 transition duration-300 hover:bg-defaultColor/10 hover:shadow-2xl hover:shadow-gray-600/10 cursor-pointer">
                <div className="flex h-10 w-10 rounded border border-gray-200 dark:border-gray-700">
                  <FastIcon className="m-auto h-6 w-6 text-gray-700 group-hover:text-defaultColor dark:text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Fast Loading Times
                  </h2>
                  <p className="mt-3 text-gray-600 dark:text-gray-400">
                    Dolorem aliquid officiis quae ipsum nobis libero alias Iure
                    nobis dicta.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
