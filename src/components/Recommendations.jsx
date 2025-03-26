import React from 'react';

const Recommendations = ({ items }) => {
  return (
    <div>
      <h3>Recommended Clothing Items:</h3>
      {items.length > 0 ? (
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              <img src={item.image} alt={item.name} style={{ width: '100px', marginRight: '10px' }} />
              <span>{item.name}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p>No recommendations available.</p>
      )}
    </div>
  );
};

export default Recommendations;
