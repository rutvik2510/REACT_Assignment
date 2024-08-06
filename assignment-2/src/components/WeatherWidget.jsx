import React from 'react';

const UserProfile = ({ temperature, condition, location}) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg p-6 bg-blue-500 text-white">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">{location}</h2>
        <p className="text-lg mb-4">{condition}</p>
        <div className="flex justify-center items-center">
          <span className="text-4xl font-bold">{temperature}°C</span>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
