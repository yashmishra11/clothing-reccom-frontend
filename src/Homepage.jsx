import React, { useState } from 'react';
// import ImageUpload from '../components/ImageUpload';
import Recommendations from './components/Recommendations';
import { getRecommendation } from './components/recommendServices';
import './HomePage.css';

const HomePage = () => {
  const [recommendations, setRecommendations] = useState([]);

  const handleImageUpload = async (file) => {
    try {
      const recommendedItems = await getRecommendation(file);
      setRecommendations(recommendedItems);
    } catch (error) {
      console.error('Error fetching recommendations:', error);
    }
  };

  return (
    <div className='home-container'>
      <h1>Clothing Recommendation Model</h1>
      {/* <ImageUpload handleImageUpload={handleImageUpload} /> */}
      <Recommendations items={recommendations} />
    </div>
  );
};

export default HomePage;
