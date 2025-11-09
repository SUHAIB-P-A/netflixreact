import React, { useEffect, useState } from 'react'
import "./RowPost.css"
import instance from '../../constants/axios'
import { API_KEY, imageUrl } from '../../constants/constants'
import YouTube from 'react-youtube'

function RowPost(props) {

    const [movieList, setMovieList] = useState([])
    const [movievidkey, setMovieKey] = useState("")


    useEffect(() => {
        instance.get(props.urls).then((response) => {
            console.log(response.data.results)
            setMovieList(response.data.results)
        }).catch(() => {
            alert("Network Error")
        })

    }, [])

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };

    const handleClick = (id) => {
        instance
            .get(`/movie/${id}/videos?api_key=${API_KEY}`)
            .then((response) => {
                if (response.status === 200 && response.data.results.length > 0) {
                    setMovieKey(response.data.results[0]);
                } else {
                    console.log("No trailer found");
                    setMovieKey(""); // reset the video
                }
            })
            .catch((error) => {
                console.error("Error fetching trailer:", error.message);
                setMovieKey(""); // prevent crash
            });
    };


    return (
        <div className='row'>

            <h1>{props.title}</h1>
            <div className="posters">
                {
                    movieList.map((obj) =>
                        <img
                            onClick={() => handleClick(obj.id)}
                            src={imageUrl + (props.isSmall ? obj.backdrop_path : obj.poster_path)}
                            alt="poster"
                            className={props.isSmall ? "smallposter" : "poster"}
                        />
                    )
                }


            </div>
            {movievidkey && <YouTube opts={opts} videoId={movievidkey.key} />
            }
        </div>

    )
}

export default RowPost
