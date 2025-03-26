import React, { useState } from 'react';

const ImageUpload = ({ handleImageUpload }) => {
  const [imagePreview, setImagePreview] = useState(null);

  const onFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
      handleImageUpload(file);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={onFileChange} />
      {imagePreview && (
        <div>
          <h3>Preview:</h3>
          <img src={imagePreview} alt="Uploaded" style={{ maxWidth: '200px', marginTop: '10px' }} />
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
