import React, { useEffect, useState } from 'react';
import './Slider.css';

function Slider({ url, limit = 5, page = 1 }) {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchImages(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      if (!response.ok) {
        throw new Error(`Failed to fetch images. Status: ${response.status}`);
      }
      const data = await response.json();
      if (Array.isArray(data)) {
        setImages(data);
      } else {
        throw new Error('Invalid response format.');
      }
    } catch (err) {
      setError(err.message || 'Something went wrong.');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (url) {
      fetchImages(url);
    } else {
      setError('Invalid URL.');
    }
  }, [url, page, limit]);

  if (loading) {
    return <div className="slider-loading">Loading...</div>;
  }

  if (error) {
    return <div className="slider-error">Error: {error}</div>;
  }

  return (
    <div className="slider-container">
      {images.length > 0 ? (
        <div className="slider">
          <img
            src={images[currentSlide]?.download_url || 'https://via.placeholder.com/800x450'}
            alt={`Slide ${currentSlide}`}
            className="slider-image"
          />
          <div className="slider-controls">
            <button
              className="slider-button"
              onClick={() =>
                setCurrentSlide((prev) => (prev - 1 + images.length) % images.length)
              }
            >
              Prev
            </button>
            <button
              className="slider-button"
              onClick={() => setCurrentSlide((prev) => (prev + 1) % images.length)}
            >
              Next
            </button>
          </div>
        </div>
      ) : (
        <div className="slider-empty">No Images Found</div>
      )}
    </div>
  );
}

export default Slider;
