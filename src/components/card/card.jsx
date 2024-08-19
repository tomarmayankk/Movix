import React from "react";
const Cards = ({ movie }) => {
  return (
      <div className="inline-block relative rounded-lg overflow-hidden m-0.5 cursor-pointer min-w-[200px] h-[300px] transition-transform duration-200 ease-in-out transform hover:scale-120 z-0 border border-gray-600 hover:z-50 hover:shadow-lg">
        <img
          className="h-[300px] w-full"
          src={movie.title.primaryImage.imageUrl}
          alt={movie.title.originalTitleText.text}
        />
        <div className="absolute bottom-0 h-[290px] flex flex-col justify-end w-[85%] p-4 bg-gradient-to-t from-black to-transparent opacity-0 transition-opacity duration-200 hover:opacity-100">
          <div className="font-extrabold text-base mb-1">
            {movie ? movie.title.originalTitleText.text : ""}
          </div>
          <div className="text-sm mb-1">
            {movie ? movie.title.releaseYear.year : ""}
            <span className="float-right">
              {movie ? movie.title.ratingsSummary.aggregateRating : ""}
            </span>
          </div>
        </div>
      </div>
  );
};

export default Cards;
