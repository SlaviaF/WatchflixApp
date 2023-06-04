import axios from "axios";
import "./Trending.css"; 
import React, { useEffect, useState } from "react";
import SingleContent from "../../components/SingleContent/SingleContent";
import CustomPagination from "../../components/Pagination/CustomPagination";

const Trending = () => {
  const [page, setPage] = useState(1); 
  const [content, setContent] = useState([]);
  useEffect(() => {
    fetchTrending();
  }, [page]);

  const fetchTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
    );

    setContent(data.results);
  };

  return (
    <div>
      <span className="pageTitle">trending</span>
      <div className="trending">
        {content &&
          content.map((movie) => (
            <SingleContent
              key={movie.id}
              id={movie.id}
              poster={movie.poster_path}
              title={movie.title || movie.name}
              date={movie.first_air_date || movie.release_date}
              media_type={movie.media_type}
              vote_average={movie.vote_average}
            />
          ))}
      </div>
      <CustomPagination setPage={setPage}/>
    </div>
  );
};

export default Trending;
