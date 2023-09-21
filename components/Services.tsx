/* eslint-disable @next/next/no-img-element */
import { ExploreIcon, ImageIcon } from "@/public/SvgIcons";
import React from "react";

const Services = () => {
  return (
    <div className="pt-32 md:pt-44" id="solution">
      <div className="mx-auto max-w-6xl px-4 md:px-12 lg:px-6 xl:px-0">
        <div className="flex-row-reverse items-center justify-between space-y-12 text-gray-600 md:flex md:gap-6 lg:gap-12 lg:space-y-0">
          <div className="relative ml-auto h-full md:w-1/2">
            <img
              src="/featureImage.png"
              alt="Freature Image"
              width="1174"
              height="1134"
            />
          </div>

          <div className="md:w-1/2 lg:w-[47%]">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white md:text-4xl lg:text-5xl">
              {/* Epic Frames Where Every Image Tells a Story */}
              Your Ultimate Source for Stunning Images.
            </h2>
            <p className="my-12 text-gray-600 dark:text-gray-300">
              Nobis minus voluptatibus pariatur dignissimos libero quaerat iure
              expedita at? Asperiores nemo possimus nesciunt dicta veniam
              aspernatur quam mollitia. <br />
              <br />
              Vitae error, quaerat officia delectus voluptatibus explicabo quo
              pariatur impedit, at reprehenderit aliquam a ipsum quas
              voluptatem. Quo pariatur asperiores eum amet.
            </p>
            <div className="space-y-4 divide-y divide-gray-100 dark:divide-gray-800">
              <div className="mt-8 flex gap-4 md:items-center">
                <div className="flex h-12 w-12 gap-4 rounded border border-gray-200 dark:border-gray-900">
                  <ImageIcon className="m-auto h-6 w-6 text-gray-700" />
                </div>
                <div className="w-5/6">
                  <h3 className="text-lg font-semibold text-gray-700 dark:text-white">
                    Breathtaking Beautiful Images
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Asperiores nemo possimus nesciunt quam mollitia.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 pt-4 md:items-center">
                <div className="flex h-12 w-12 gap-4 rounded border border-gray-200 dark:border-gray-900">
                  <ExploreIcon className="m-auto h-6 w-6 text-gray-700" />
                </div>
                <div className="w-5/6">
                  <h3 className="text-lg font-semibold text-gray-700 dark:text-white">
                    Explore Endless Inspiration
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Asperiores nemo possimus nesciunt quam mollitia.
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

export default Services;
