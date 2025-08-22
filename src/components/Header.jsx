import React from "react";

const PageHeader = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-indigo-500 text-white py-6 px-4 rounded-b-lg shadow-md text-center">
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide">
        Job Application Tracker
      </h1>
      <p className="mt-2 text-lg md:text-xl font-light">
        Keep track of your applications efficiently
      </p>
    </header>
  );
}

export default PageHeader;
