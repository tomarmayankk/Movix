import React, { useEffect, useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import Cards from '../../components/card/card';
import Footer from './footer';


const Home = () => {
    const [popularMovies, setpopularMovies] = useState([]);
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
        setpopularMovies(result.data.list); // Console log the result here
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
    <div className='poster'>
        <Carousel
        showThumbs={false}
        autoPlay={true}
        transitionTime={1}
        infiniteLoop={true}
        showStatus={false}
        >
            {
                popularMovies.map(movie =>(
                    <Link 
                    key={movie.title.id} 
                    to={`/movie/${movie.title.id}`} 
                    className="no-underline text-white"
                >
                    <div className="relative h-[600px]">
                        <img 
                            src={movie.title.primaryImage.imageUrl} 
                            alt={movie.title.originalTitleText.text} 
                            className="m-auto block w-full" 
                        />
                        <div className="absolute bottom-0 h-[70%] flex flex-col w-full justify-end items-start p-20 bg-gradient-to-t from-black to-transparent opacity-100 transition-opacity duration-300 hover:opacity-100">
                            <div className="font-black text-4xl mb-1.5 text-left">
                                {movie ? movie.title.originalTitleText.text : ""}
                            </div>
                            <div className="text-2xl mb-4 flex items-center justify-between">
                                {movie ? movie.title.releaseYear.year : ""}
                                <span className="ml-12 flex"> 
                                    {movie ? movie.title.ratingsSummary.aggregateRating : ""}
                                </span>
                            </div>
                        </div>
                    </div>
                </Link>
                ))
            }
        </Carousel>

    </div>
{/* More Movies Section */}
<div className="px-12 pb-12">
        <div className="flex flex-wrap justify-center">
          {popularMovies.slice(0, 15).map(movie => (
            <Cards key={movie.title.id} movie={movie} />
          ))}
        </div>
    </div>
    <Footer/>
    </>
  );
};

export default Home;
