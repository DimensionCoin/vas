"use client"
import React, { useEffect } from "react";

function Insta() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    script.setAttribute("data-use-service-core", "");
    document.body.appendChild(script);

    // Optional: Cleanup the script when component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center lg:px-32 xs:px-2">
      <div className="elfsight-app-29cff5b0-6056-445a-a053-ea3e9e38e099"></div>
    </div>
  );
}

export default Insta;
