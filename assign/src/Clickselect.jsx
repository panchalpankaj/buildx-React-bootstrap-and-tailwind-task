import React, { useState } from 'react';

const Clickselect = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { id: 1, src: 'Image/1.png', alt: 'Image 1' },
    { id: 2, src: 'Image/11.png', alt: 'Image 2' },
    { id: 3, src: 'Image/12.png', alt: 'Image 3' },
    { id: 4, src: 'Image/tree.png', alt: 'Image 4' },
    { id: 5, src: 'Image/1.png', alt: 'Image 5' },
    { id: 6, src: 'Image/tree.png', alt: 'Image 6' },
  ];

  const showImage = (id) => {
    const image = images.find((img) => img.id === id);
    setSelectedImage(image);
  };

  return (
    <div className="px-4 md:px-8 lg:px-16">
      <div className="mb-3 flex justify-center flex-wrap">
        {images.map((image) => (
          <button
            key={image.id}
            onClick={() => showImage(image.id)}
            className={`mx-2 p-2 rounded ${
              selectedImage?.id === image.id
                ? 'bg-yellow-500 text-white'
                : 'bg-white text-black border border-gray-300'
            }`}
          >
            Show Image {image.id}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-0">
        {!selectedImage &&
          images.map((image) => (
            <img
              key={image.id}
              src={image.src}
              alt={image.alt}
              className="w-full h-32 object-cover"
              style={{ width: '100%', height: '100%' }}
            />
          ))}

        {selectedImage && (
          <div className="col-span-3 flex justify-center">
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="object-cover"
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Clickselect;
