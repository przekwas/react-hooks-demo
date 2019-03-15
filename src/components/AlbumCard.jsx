import React, { useState, useEffect } from 'react';

const AlbumCard = props => {

    const [album, setAlbum] = useState({});

    //useEffect(() => {}, [props]) === componentWillReceiveProps(nextProps)
    //telling it to re run the effect only when it gets new props as a change
    useEffect(() => {
        fetch(`https://student-fun-api.herokuapp.com/api/hiphop/${props.id}`)
            .then(res => res.json())
            .then(data => setAlbum(data[0]));
    }, [props.id]);

    return (
        <article className="col-md-12">
            <div className="card p-2">
                <div className="row">
                    <div className="col-md-4">
                        <img src={album.image} className="img-fluid" alt="album art" />
                    </div>
                    <div className="col-md-4">
                        <div className="card p-3 m-3 border border-dark rounded shadow text-center">
                            <div className="card-body">
                                <p className="card-text"><b>Title</b>: {album.title}</p>
                                <p className="card-text"><b>Artist</b>: {album.artist}</p>
                                <a href={album.url} target="_blank" rel="noopener noreferrer"><button className="btn btn-outline-info shadow-sm">See on Amazon</button></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <img src={album.thumbnail_image} className="img-fluid" alt="artist" />
                    </div>
                </div>
            </div>
        </article>
    );
}

export default AlbumCard;