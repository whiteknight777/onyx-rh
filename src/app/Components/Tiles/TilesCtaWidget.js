/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

export function TilesCtaWidget({ 
  className, 
  widgetHeight = "175px", 
  title="Create CRM Reports", 
  subtitle="Generate the latest CRM Report",
  btn={title: "Start Now", url:"#"}
  }) {
  return (
    <>
      <div
        className={`card card-custom ${className}`}
        style={{ height: widgetHeight }}
      >
        {/* begin::Body */}
        <div className="card-body d-flex align-items-center justify-content-between flex-wrap">
          <div className="mr-2">
            <h3 className="font-weight-bolder">{title}</h3>
            <div className="text-dark-50 font-size-lg mt-2">
              {subtitle}
            </div>
          </div>
          <a href={btn.url} className="btn btn-primary font-weight-bold py-3 px-6">
            {btn.title}
          </a>
        </div>
        {/* end::Body */}
      </div>
    </>
  );
}
