import React from "react";

const SimpleLabel = ({
  htmlFor,
  title,
}: {
  htmlFor: string;
  title: string;
}) => {
  return (
    <label htmlFor={htmlFor} className="text-gray-600 font-normal mb-2.5 block">
      {title}
    </label>
  );
};

export default SimpleLabel;
