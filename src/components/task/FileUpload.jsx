import axios from 'axios';
import React, { useState } from 'react';

function FileUpload() {
  const [files, setFiles] = useState();
// console.log(files[0])
  // Function to handle file selection
  const handleFileChange = (event) => {
    const file = event.target.files[0]
    setFiles(file); // Store the selected files
    console.log(files)
  };

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Create a FormData object
    const formData = new FormData();
    formData.append("files", files)

    // Append each file to the FormData object
    // Array.from(files).forEach((file, index) => {
    //   formData.append(`files[${index}]`, file); // You can adjust the key as needed
    // });

    // Send a POST request with the files
    try {
      const response = await axios.post('http://localhost:3000/upload', formData, 
    //     {
    //     headers: {
    //       'Content-Type': 'multipart/form-data',
    //     },
    //   }
    )
      console.log('Files uploaded successfully:', response.data);
    } catch (error) {
      console.error('Error uploading files:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="file"
        // multiple
        onChange={handleFileChange}
      />
      <button type="submit">Upload Files</button>
    </form>
  );
}

export default FileUpload;
