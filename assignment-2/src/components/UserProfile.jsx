import React from 'react';

const UserProfile = ({ name, age, profilePicture }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-6 bg-white">
      <img
        className="w-full h-48 object-cover"
        src={profilePicture}
        alt={`${name}'s profile`}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">Age: {age}</p>
      </div>
    </div>
  );
};

export default UserProfile;
