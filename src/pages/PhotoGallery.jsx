import React from 'react';

const PhotoGallery = () => {
  const totalPhotos = 6; // This matches your 6 renamed photos

  return (
    <div className="bg-[#fff9db] min-h-screen p-8">
      <h2 className="text-3xl font-black text-[#991b1b] text-center uppercase mb-10 border-b-4 border-orange-400 pb-2">
        School Photo Gallery
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {Array.from({ length: totalPhotos }).map((_, i) => (
          <div key={i} className="rounded-xl overflow-hidden shadow-lg border-4 border-white">
            <img 
              /* This path points directly to your public/gallery folder */
              src={`/gallery/pic-${i + 1}.jpg`} 
              className="w-full h-48 object-cover" 
              alt={`Gallery ${i + 1}`}
              onError={(e) => { e.target.src = "https://via.placeholder.com/300?text=Check+Filename"; }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;