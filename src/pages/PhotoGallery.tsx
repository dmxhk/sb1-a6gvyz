import React, { useState, useEffect } from 'react';

interface Photo {
  id: number;
  url: string;
  title: string;
  category: string;
}

const PhotoGallery: React.FC = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  useEffect(() => {
    // TODO: Fetch photos from API
    // This is a placeholder, replace with actual API call
    setPhotos([
      { id: 1, url: 'https://source.unsplash.com/random/800x600?nature', title: 'Nature 1', category: 'nature' },
      { id: 2, url: 'https://source.unsplash.com/random/800x600?city', title: 'City 1', category: 'city' },
      { id: 3, url: 'https://source.unsplash.com/random/800x600?people', title: 'People 1', category: 'people' },
      { id: 4, url: 'https://source.unsplash.com/random/800x600?nature', title: 'Nature 2', category: 'nature' },
    ]);
  }, []);

  const filteredPhotos = selectedCategory === 'all' ? photos : photos.filter(photo => photo.category === selectedCategory);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Photo Gallery</h2>
      <div className="mb-4">
        <label htmlFor="category" className="mr-2">Filter by category:</label>
        <select
          id="category"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border rounded px-2 py-1"
        >
          <option value="all">All</option>
          <option value="nature">Nature</option>
          <option value="city">City</option>
          <option value="people">People</option>
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredPhotos.map(photo => (
          <div key={photo.id} className="border rounded overflow-hidden">
            <img src={photo.url} alt={photo.title} className="w-full h-48 object-cover" />
            <div className="p-2">
              <h3 className="font-bold">{photo.title}</h3>
              <p className="text-sm text-gray-600">{photo.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;