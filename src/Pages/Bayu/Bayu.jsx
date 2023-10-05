import React, { useRef,useState} from 'react'

export const Bayu=()=>{

    const fileInputRef = useRef(null);

    const [selectedFile,setSelectedFile] = useState()
    const handleFileChange = (e) => {
        const file = e.target.files?.[0];
        setSelectedFile(file || null);
        if(file !== undefined){
        //   props.onUploadImage(file)
        console.log(file)
        }
      };
    return (
        <>
        <h1> {selectedFile?.name}
        {selectedFile?.type}
        {selectedFile?.size}
        selected file</h1>
        <input
          ref={fileInputRef}
          type="file"
          // accept="image/*"
          accept=".jpg, .jpeg, .tiff, .png, .gif, .bmp, .heic, .heif"
          onChange={handleFileChange}
          className="hidden"
        />
        </>
    )
}

export default Bayu