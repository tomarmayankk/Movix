import React, { useEffect, useState } from "react";
import Cards from "../../components/card/card";
import Header from "./Header";


const MovieList = () => {
  const [movieList, setMovieList] = useState([]);
  const [sortedList, setSortedList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://imdb188.p.rapidapi.com/api/v1/getPopularMovies', {
          method: 'POST',
          headers: {
           'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
                        'x-rapidapi-host': process.env.REACT_APP_RAPIDAPI_HOST
          }
        });

        const result = await response.json();
        const movies = result.data.list;

        setMovieList(movies);
        setSortedList(movies); // Initially set sortedList to the fetched movies
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleTopRatedSort = () => {
    const filteredMovies = movieList
      .filter(movie => movie.title.ratingsSummary.aggregateRating > 5)
      .sort((a, b) => b.title.ratingsSummary.voteCount - a.title.ratingsSummary.voteCount);
    setSortedList(filteredMovies);
  };

  const handlePopularSort = () => {
    setSortedList(movieList);
  };

  return (
    <div className="px-12 pb-12">
      <Header onSort={handleTopRatedSort} onPopularSort={handlePopularSort} />
      <div className="flex flex-wrap justify-center">
        {sortedList.map(movie => (
          <Cards movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
