import React, { useState, useEffect } from 'react';
import AlbumCard from './components/AlbumCard';

const App = () => {

    //useState returns a state and a setState
    //use ES6 Array Destructuring to "pull" those values into our own variable names
    //and notice state doesn't *have* to be a giant object anymore
    const [albums, setAlbums] = useState([]);
    const [selectedAlbum, setSelectedAlbum] = useState("1");

    //useEffect(() => {}, []) === componentDidMount()
    //because useEffect() => {})} === componentDidMount, componentDidUpdate, and componentWillUnmount combined
    //and we don't wanna make an infinite loop of fetch calls
    //passing a blank [] as the second argument
    //tells React that your effect doesn’t depend on any values from props or state, so it never needs to re-run
    useEffect(() => {
        fetch('https://student-fun-api.herokuapp.com/api/hiphop')
            .then(res => res.json())
            .then(data => setAlbums(data));
    }, []);

    return (
        <main className="container">
            <section className="row my-2">
                <div className="col-md-12">
                    <select
                        // value tied to "state"
                        value={selectedAlbum}
                        onChange={event => setSelectedAlbum(event.target.value)}
                        className="form-control">
                        {albums.map(album => (
                            <option key={album.id} value={album.id}>{album.title}</option>
                        ))}
                    </select>
                </div>
            </section>
            <section className="row">
                {/* yes I could just pass the album down from the array, */}
                {/* but i wanted to show off another useEffect in <AlbumCard /> */}
                <AlbumCard id={selectedAlbum} />
            </section>
        </main>
    );
}

export default App;