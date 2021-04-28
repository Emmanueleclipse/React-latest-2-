import React from 'react';
import logoLoader from '@images/logo-loader.svg';

const PatronRequestPosting = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="mb-16 flex flex-col items-center">
        <p className="font-gotham-medium text-blue-gray text-md mb-4">
          Posting your request!
        </p>
        <p className="font-gotham-book text-sm text-gray-500 mb-16 text-center">
          <p>We’ll notify you when Storks</p>
          <p> start bidding.</p>
        </p>
        <img src={logoLoader} alt="logo-loader" />
      </div>
    </div>
  );
};

export default PatronRequestPosting;
