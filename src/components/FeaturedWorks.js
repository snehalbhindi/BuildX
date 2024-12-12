import React, { useState } from 'react';
import { motion } from 'framer-motion';
import image1 from '../assets/Rectangle 10.png';
import image2 from '../assets/Rectangle 7.png';
import image3 from '../assets/Rectangle 9.png';

const works = [
  {
    title: 'Architecture and Design',
    description: 'Explore modern architecture and innovative designs.',
    image: image1,
  },
  {
    title: 'Beach and Landscape',
    description: 'Stunning views of natural beaches and landscapes.',
    image: image2,
  },
  {
    title: 'Green Building',
    description: 'Discover eco-friendly and sustainable building designs.',
    image: image3,
  },
];

const FeaturedWorks = () => {
  const [filteredWorks, setFilteredWorks] = useState(works); // Maintain filtered works state

  const handleFilterChange = (filterValue) => {
    const filteredWorks = works.filter((work) =>
      work.title.toLowerCase().includes(filterValue.toLowerCase())
    );
    setFilteredWorks(filteredWorks);
  };

  return (
    <div className="container mx-auto my-10">
      
      {/* Filter controls */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Filter by Title"
          onChange={(e) => handleFilterChange(e.target.value)}
          className="p-2 border rounded-md shadow-md w-full md:w-1/3"
        />
      </div>

      <h2 className="text-2xl font-bold mb-6 text-center">Featured Works</h2>
      <motion.div
        animate={{ opacity: 1 }} // Initial opacity animation
        initial={{ opacity: 0 }} // Initial opacity state
        transition={{ duration: 0.5 }} // Transition duration for filtering animation
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredWorks.map((work, index) => (
            <motion.div
              key={index}
              className="p-6 bg-gray-100 shadow-md rounded-md cursor-pointer"
              whileHover={{ scale: 1.05 }} // Hover animation
              onClick={() => {
                // Implement image click logic here
                console.log('Image clicked:', work.title);
              }}
            >
              <img
                src={work.image}
                alt={work.title}
                className="w-full h-40 object-cover rounded-md"
              />
              <h3 className="text-xl font-semibold mt-4 text-center">
                {work.title}
              </h3>
              <p className="text-gray-600 text-center">{work.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default FeaturedWorks;
