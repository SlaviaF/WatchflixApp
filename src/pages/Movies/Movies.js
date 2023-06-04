import axios from "axios";
import React, { useEffect, useState } from "react";
import SingleContent from "../../components/SingleContent/SingleContent";
import CustomPagination from "../../components/Pagination/CustomPagination";

const Movies = () => {
  const [content, setContent] = useState([]);
  const [page, setPage] = useState([1]);
  const [numOfPages, setNumOfPages] = useState();
  const fetchMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`
    );
    setContent(data.results);
    setNumOfPages(data.total_pages);
  };

  useEffect(() => {
    fetchMovies();
  });
  return (
    <div>
      <span className="pageTitle">Movies</span>
   
      <div className="trending">
        {content &&
          content.map((movie) => (
            <SingleContent
              key={movie.id}
              id={movie.id}
              poster={movie.poster_path}
              title={movie.title || movie.name}
              date={movie.first_air_date || movie.release_date}
              media_type="movie"
              vote_average={movie.vote_average}
            />
          ))}
      </div>
      {numOfPages > 1 && (<CustomPagination setPage={setPage} numOfPages={numOfPages} />)}

    </div>
  );
};

export default Movies;
