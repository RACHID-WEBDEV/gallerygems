/* eslint-disable react/display-name */

import React, { forwardRef, Ref, HTMLAttributes } from "react";

interface PhotoProps extends HTMLAttributes<HTMLDivElement> {
  url: string;
  index: number;
  faded?: boolean;
  style?: React.CSSProperties;
}

export const Photo: React.FC<PhotoProps> = forwardRef(
  ({ url, index, faded, style, ...props }, ref: Ref<HTMLDivElement>) => {
    const inlineStyles: React.CSSProperties = {
      opacity: faded ? "0.2" : "1",
      transformOrigin: "0 0",
      //   height: index === 0 || index === 7 ? 410 : 200,
      //   gridRowStart: index === 0 || index === 7 ? "span 2" : undefined,
      // gridColumnStart:
      //   index === 0 || index === 8 || index === 16 || index === 25
      //     ? "span 2"
      //     : undefined,
      height: 620,
      backgroundImage: `url("${url}")`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundColor: "grey",
      borderRadius: "10px",
      ...style,
    };

    return <div ref={ref} style={inlineStyles} {...props} />;
  }
);
