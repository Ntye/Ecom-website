import React, {useEffect, useState} from 'react';
import axios from 'axios';

function Location() {

  const [photo, setPhoto] = useState(null);
  const [codePro, setCodePro] = useState('');
  const [message, setMessage] = useState('');

  const [error, setError] = useState(null);

  if (error) {
    return <p>Error fetching photos: {error}</p>;
  }

  const handlePhotoChange = (e) => {
    setPhoto(e.target.files[0]);
  };

  const handleCodeProChange = (e) => {
    setCodePro(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('photo', photo);
    formData.append('codePro', codePro);

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setMessage(response.data.message || 'Photo uploaded successfully!');
    } catch (error) {
      setMessage('An error occurred while uploading the photo.');
    }
  };


  return (
    <div>
      <h2>Upload Photo</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <input type="file" name="photo" required onChange={handlePhotoChange}/>
        <input type="text" name="codePro" required value={codePro} onChange={handleCodeProChange} placeholder="Code du produit"/>
        <button type="submit">Upload</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  )
}

export default Location;