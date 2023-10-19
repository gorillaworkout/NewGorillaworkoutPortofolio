import React, { useRef, useState } from "react";
import Cookiebot from "../../Components/Cookiebot"
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
  return (
    <>
    <Cookiebot/>
      <h1>size : {selectedFile?.size / (1024*1024)} mb</h1>
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
