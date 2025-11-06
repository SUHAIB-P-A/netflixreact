import React, { useEffect, useState } from 'react'
import instance from '../../constants/axios'
import { imageUrl } from '../../constants/constants'
import "./Banner.css"
import { trendingMovieEndpoint } from '../../constants/endpoints'

function Banner() {
    const [movie, setMovie] = useState()

    useEffect(() => {
        instance.get(trendingMovieEndpoint).then((response) => {
            console.log(response.data.results[0])
            setMovie(response.data.results[4])
        })
    }, [])


    return (
        < div className='banner' style={{ backgroundImage: `url( ${movie ? imageUrl + movie.backdrop_path : ""})` }} >
            <div className="content">
                <h1 className='tilte' > {movie ? movie.title : ""} </h1>
                <div >
                    <button className='button' > Play </button>
                    <button className='button' > My List </button>
                </div>
                <h1 className="description">{movie ? movie.overview : ""}</h1>
            </div>
            <div className='fade_bottom' ></div>

        </div>
    )
}

export default Banner
