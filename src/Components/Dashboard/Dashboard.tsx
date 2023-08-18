import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './dashboard.css';
import logo from "../../assets/logospot.png";

const Dashboard: React.FC = () => {
    const location = useLocation();
    const [token, setToken] = useState<string | null>(null);
    const [recentTracks, setRecentTracks] = useState<any[] | null>(null);
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [searchResults, setSearchResults] = useState<any[]>([]);

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    const handleSearchSubmit = async () => {
        if (token) {
            const results = await searchTracks(searchQuery, token);
            setSearchResults(results);
        }
    };

    type SpotifyTrack = {
        name: string;
        artists: { name: string }[];
        uri: string;
    };

    const searchTracks = async (query: string, accessToken: string): Promise<SpotifyTrack[]> => {
        const response = await fetch(`https://api.spotify.com/v1/search?q=${query}&type=track&limit=10`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        });
   
        if (!response.ok) {
            throw new Error('Failed to fetch search results');
        }
   
        const data = await response.json();
        return data.tracks.items.map((item: SpotifyTrack) => ({
            name: item.name,
            artist: item.artists[0].name,
            uri: item.uri
        }));
    };
  

    
    useEffect(() => {
        const query = new URLSearchParams(location.search);
        const accessToken = query.get('token');
        if (accessToken) {
            setToken(accessToken);
        }
    }, [location]);

    
    useEffect(() => {
        if (token) {
            fetch('https://api.spotify.com/v1/me/player/recently-played', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            .then(response => response.json())
            .then(data => {
                setRecentTracks(data.items);
            });
        }
    }, [token]);

    return (
      <div className="dashboard">
            <aside className="sidebar">
                <div className="logo">
                <img src={logo} alt="" />
                </div>
                <ul className="menu">
                    <li>Home</li>
                    <li>Search</li>
                    <li>Library</li>
                </ul>
                <div className="playlists">
                    <div>Create Playlist</div>
                    <div>Liked Songs</div>
                </div>
                <div className="episodes">
                    Your Episodes
                </div>
            </aside>
            <main className="main-content">
                <h2>Activités récentes</h2>

                <div className="search-bar">
                    <input type="text" value={searchQuery} onChange={handleSearchChange} placeholder="Rechercher des pistes..." />
                    <button onClick={handleSearchSubmit}>Rechercher</button>
                </div>

                <div className="search-results">
                {searchResults.map((track, index) => (
                        <div key={index}>
                            {track.name} - {track.artists && track.artists.length > 0 ? track.artists[0].name : 'Artiste inconnu'}
                            <iframe src={`https://open.spotify.com/embed/track/${track.uri.split(":")[2]}`} width="300" height="80" frameBorder="0" allow="encrypted-media"></iframe>
                        </div>
                    ))}

                </div>

                <ul>
                    {recentTracks && recentTracks.map((trackItem, index) => (
                        <li key={index}>
                            {trackItem.track.name} - {trackItem.track.artists[0].name}
                            <iframe src={`https://open.spotify.com/embed/track/${trackItem.track.uri.split(":")[2]}`} width="300" height="80" frameBorder="0" allow="encrypted-media"></iframe>

                        </li>
                    ))}
                </ul>
            </main>
        </div>
    );
}

export default Dashboard;
