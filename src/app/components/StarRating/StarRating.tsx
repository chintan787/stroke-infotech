import React,{useState} from 'react'

export default function StarRating() {
    const [rating, setRating] = useState(3);
    const [hover, setHover] = useState(0);
  return (
    <div className="star-rating">
    {[...Array(5)].map((star, index) => {
      index += 1;
      return (
        <button
        id="ratingButton"
          type="button"
          key={index}
          className={index <= rating ? "text-primary" : "text-gray"}
          onClick={() => setRating(index)}
          onMouseEnter={() => setHover(index)}
          onMouseLeave={() => setHover(rating)}
        >
          <span className="star text-4xl">&#9733;</span>
        </button>
      );
    })}
  </div>
  )
}
