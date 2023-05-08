// Write your code here
import MoviesSlider from '../MoviesSlider'
import './index.css'

const PrimeVideo = args => {
  const {moviesList} = args

  const actionMoviesList = moviesList.filter(
    movieItem => movieItem.categoryId === 'ACTION',
  )

  const comedyMoviesList = moviesList.filter(
    movieItem => movieItem.categoryId === 'COMEDY',
  )

  return (
    <div className="bg-con">
      <img
        className="header-img"
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
      />
      <div className="movie-sliders-con">
        <h1 className="slider-label">Action Movies</h1>
        <MoviesSlider
          moviesList={moviesList}
          actionMovieDetails={actionMoviesList}
        />
        <h1 className="slider-label">Comedy Movies</h1>
        <MoviesSlider comedyMovieDetails={comedyMoviesList} />
      </div>
    </div>
  )
}

export default PrimeVideo
