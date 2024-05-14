import React, {useEffect, useState} from 'react';
import axios from 'axios';

function Location() {

  const [photo, setPhoto] = useState(null);
  const [codePro, setCodePro] = useState('');
  const [message, setMessage] = useState('');

  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/photos');
        console.log(response.data); // Debug: log the photo data
        setPhotos(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchPhotos();
  }, []);


  if (loading) {
    return <p>Loading photos...</p>;
  }

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
        <input type="text" name="codePro" required value={codePro} onChange={handleCodeProChange}/>
        <button type="submit">Upload</button>
      </form>
      {message && <p>{message}</p>}

      <h2>Photo Gallery</h2>
      <div>
        {photos.map(picture => (
          <div key={picture.idPhoto}>
            <img src={picture.lienPhoto} width="200"/>
          </div>
        ))}
      </div>
    </div>
  )
}

const dropzoneStyle = {
  border: '2px dashed #ccc',
  borderRadius: '4px',
  padding: '20px',
  textAlign: 'center',
  cursor: 'pointer',
}

export default Location;