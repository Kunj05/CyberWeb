import React from 'react';
import Header from '../header';

const AboutUsPage = () => {
  return (
    <div>
      <Header/>
    <div className="bg-gray-200 p-6">
      <h2 className="text-3xl font-bold mb-4">About Us</h2>
      <p>
        DEMO TEXT<br/>
        Kaduu (company registration number CHE-325.433.380) was started in 2018 as a public limited company in Zug, Switzerland. Our analysts have long-standing relationships with various players on the Darknet.
      </p>
      <p>
        These personal relationships make it possible for Kaduu to repeatedly obtain the latest data leaks. Those unique data leaks are published by the press around the world.
      </p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Read More</button>
    </div>
    </div>
  );
};

export default AboutUsPage;