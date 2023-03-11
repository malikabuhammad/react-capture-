import styled from "styled-components"
import { useNavigate } from 'react-router-dom';
import {MovieState} from '../movieState'
import { useEffect, useState } from "react";
//animation 
import { motion } from 'framer-motion';
import { PageAnimation } from './animation'; 

const MovieDetail = () => {
    const history = useNavigate();
    const url =window.location.pathname;
    const [movies, setMovies] = useState(MovieState);
    const [movie, setMovie] = useState(null);
    console.log(movie);

  
    useEffect(() => {
      const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
      setMovie(currentMovie[0]);

    }, [movies, url]);
  
    return (
        <>
        {movie && (
<Details variants={PageAnimation} initial="hidden" animate="show" exit="exit">
<HeadLing>
   <h2>{movie.title}</h2>
   <img src={movie.mainImg} alt="movie" />
</HeadLing>
<Awards>
    {movie.awards.map((award)=>(
        <Award
        //every thing we map over needs a key 
        key={award.title}
        title={award.title}
        description={award.description}
      />
    ))}
</Awards>
<ImageDisplay>
    <img src={movie.secondaryImg} alt="" srcset="" />g
</ImageDisplay>

</Details>
        )};
        </>
    )

}
const Details = styled(motion.div)`
color: white;

`;

const HeadLing=styled.div`
min-height: 90vh;
padding-top:20vh ;
position: relative;
h2{
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%,-10%);
}
img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;
const Awards = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 1500px) {
    display: block;
    margin: 2rem 2rem;
  }
`;

const AwardStyle = styled.div`
  padding: 5rem;
  h3 {
    font-size: 2rem;
  }
  .line {
    width: 50%;
    background: #23d997;
    height: 0.5rem;
    margin: 1rem 0rem;
  }
  p {
    padding: 2rem 0rem;
  }
`;
//Award Component 

const Award = ({ title, description }) => {
    return (
      <AwardStyle>
        <h3>{title}</h3>
        <div className="line"></div>
        <p>{description}</p>
      </AwardStyle>
    );
  };
  const ImageDisplay = styled.div`
  min-height: 50vh;
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;
  
export default MovieDetail;

