import React, { useEffect, useState } from 'react'
import './Albuns.css'

const Albuns = () => {

    const [albuns, setAlbuns] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/albums').
            then(response => response.json()).
            then(data => setAlbuns(data))
    }, [])

    return (
        <div>
            <h3>Dados consumidos:</h3>
            {albuns.map(album => {
                return (
                    <div>
                        <h4>id:{album.id} - {album.title} </h4>
                    </div>
                )
            })}
        </div>
    )
}

export default Albuns