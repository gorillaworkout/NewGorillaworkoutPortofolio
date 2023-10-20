import React, { useRef, useState, useEffect } from "react";
import Cookiebot from "../../Components/Cookiebot";
export const Bayu = () => {
  const fileInputRef = useRef(null);

  const [selectedFile, setSelectedFile] = useState();
  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    setSelectedFile(file || null);
    if (file !== undefined) {
      //   props.onUploadImage(file)
      console.log(file);
    }
  };
  // useEffect(() => {
  //   const script = document.createElement("script");
  //   script.id = "CookieDeclaration";
  //   script.src = "https://consent.cookiebot.com/833787b2-df56-499c-bf41-32fbb791b29a/cd.js";
  //   script.type = "text/javascript";
  //   script.async = true;

  //   document.body.appendChild(script);

  //   return () => {
  //     // Clean up the script when the component unmounts
  //     document.body.removeChild(script);
  //   };
  // }, []);
  return (
    <>
      <Cookiebot />
      <h1>size : {selectedFile?.size / (1024 * 1024)} mb</h1>
      <h1> name: {selectedFile?.name}</h1>
      <h1>type:{selectedFile?.type}</h1>
      <input
        ref={fileInputRef}
        type="file"
        accept=".jpg, .jpeg, .tiff, .png, .gif, .bmp, .heic, .heif"
        onChange={handleFileChange}
        className="hidden"
      />
    </>
  );
};

export default Bayu;
