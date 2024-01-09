import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

const Upload = () => {
    const [fileName, setFileName] = useState('No file chosen');
    const navigate = useNavigate();

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFileName(selectedFile ? selectedFile.name : 'No file chosen');
  };

  const handleUpload = async () => {
    const fileInput = document.getElementById('file-input');

    // Check if a file is selected before proceeding with the upload
      if (fileInput.files.length === 0) {
        alert('Please choose a CSV file before uploading.');
        return;
      }
    const formData = new FormData();
    formData.append('file', fileInput.files[0]);

  try {
    const response = await fetch("http://localhost:5000/upload", {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Error:', errorData.message);
      return;
    }

    const result = await response.json();
    console.log(result.message)
    document.getElementById('result').innerText = result.message;

  
     // Navigate to the '/url' route
     navigate('/url');

  } catch (error) {
    console.error('Error:', error);
  }
      
  };
  return (
    <div className="h-screen w-full bg-gradient-to-b from-black to-gray-800 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <h2 className="text-2xl font-semibold mb-4">Upload csv file here</h2>
        <form id="upload-form" action="#" method="post" encType="multipart/form-data">
          <input
            type="file"
            id="file-input"
            name="file"
            accept=".csv"
            className="hidden"
            onChange={handleFileChange}
          />
          <label htmlFor="file-input" className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer transition duration-300 hover:bg-blue-600">
            Choose a CSV file
          </label>
          <p id="file-name" className="mt-2">{fileName}</p>
          <button
            type="submit"
            id="upload-btn"
            className="bg-green-500 text-white px-4 py-2 rounded cursor-pointer text-lg mt-4 transition duration-300 hover:bg-green-600"
            onClick={handleUpload}
          >
            Upload
          </button>
        </form>
      </div>
      <div className="text-white text-lg" id="result"></div>
    </div>
  );
};

export default Upload;