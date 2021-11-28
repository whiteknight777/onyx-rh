/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

export function TilesWidget2({
  className,
  baseColor = "primary",
  widgetHeight = "150px",
  icon,
  value=790,
  title="New Products",
  url="#"
}) {
  return (
    <>
      <div
        className={`card card-custom bg-${baseColor} ${className}`}
        style={{ height: widgetHeight }}
      >
        <div className="card-body">
          {icon}
          <div
            className={`text-inverse-${baseColor} font-weight-bolder font-size-h2 mt-3`}
          >
            {value}
          </div>

          <a
            href={url}
            className={`text-inverse-${baseColor} font-weight-bold font-size-lg mt-1`}
          >
            {title}
          </a>
        </div>
      </div>
    </>
  );
}
