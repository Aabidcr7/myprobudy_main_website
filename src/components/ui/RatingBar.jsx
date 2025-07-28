import React, { useState } from 'react';
import PropTypes from 'prop-types';

const RatingBar = ({ 
  rating = 0, 
  maxRating = 5, 
  onRatingChange,
  size = 'medium',
  readonly = false,
  className = '',
  ...props 
}) => {
  const [hoverRating, setHoverRating] = useState(0);
  
  const sizes = {
    small: 'w-4 h-4',
    medium: 'w-5 h-5',
    large: 'w-6 h-6',
  };
  
  const handleStarClick = (starIndex) => {
    if (!readonly && onRatingChange) {
      onRatingChange(starIndex + 1);
    }
  };
  
  const handleStarHover = (starIndex) => {
    if (!readonly) {
      setHoverRating(starIndex + 1);
    }
  };
  
  const handleMouseLeave = () => {
    if (!readonly) {
      setHoverRating(0);
    }
  };
  
  const renderStar = (index) => {
    const isFilled = (hoverRating || rating) > index;
    
    return (
      <button
        key={index}
        type="button"
        onClick={() => handleStarClick(index)}
        onMouseEnter={() => handleStarHover(index)}
        disabled={readonly}
        className={`${sizes[size]} ${readonly ? 'cursor-default' : 'cursor-pointer'} transition-colors duration-200 focus:outline-none`}
        aria-label={`Rate ${index + 1} out of ${maxRating} stars`}
      >
        <svg
          className={`w-full h-full ${isFilled ? 'text-yellow-400' : 'text-gray-300'} transition-colors duration-200`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      </button>
    );
  };
  
  return (
    <div
      className={`flex items-center gap-1 ${className}`}
      onMouseLeave={handleMouseLeave}
      role="img"
      aria-label={`Rating: ${rating} out of ${maxRating} stars`}
      {...props}
    >
      {Array.from({ length: maxRating }, (_, index) => renderStar(index))}
    </div>
  );
};

RatingBar.propTypes = {
  rating: PropTypes.number,
  maxRating: PropTypes.number,
  onRatingChange: PropTypes.func,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  readonly: PropTypes.bool,
  className: PropTypes.string,
};

export default RatingBar;