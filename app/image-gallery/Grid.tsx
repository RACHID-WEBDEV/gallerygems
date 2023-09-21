import React from "react";

export function Grid({ children, columns }: { children?: any; columns?: any }) {
  return (
    <div
      //   style={{
      //     display: "grid",
      //     gridTemplateColumns: `repeat(${columns}, 1fr)`,
      //     gridGap: 10,
      //     padding: 10,
      //   }}
      className="gridContainer "
    >
      {children}
    </div>
  );
}
