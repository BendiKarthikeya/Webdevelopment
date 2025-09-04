import React, { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import CardComponent from './CardComponent';
import ShimmerUI from './ShimmerUI';
import { GeminiAPI } from './Utils/APIS';
function BodyComponent() {
    const { searchQuery } = useOutletContext();
    const [Youtubedata, setYoutubedata] = useState([]);
    const [loading, setLoading] = useState(false); // Add loading state

    async function fetchYoutubeData(query = "Music") {
        setLoading(true); // Start loading
        const URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=${GeminiAPI}&maxResults=20&type=video`;
        try {
            const response = await fetch(URL);
            const data = await response.json();
            setYoutubedata(data.items || []);
        } catch (error) {
            console.error("Error fetching YouTube data:", error);
            setYoutubedata([]);
        } finally {
            setLoading(false); // Stop loading
        }
    }
    
    useEffect(() => {
        fetchYoutubeData();
    }, []);

    useEffect(() => {
        if (searchQuery) {
            fetchYoutubeData(searchQuery);
        }
    }, [searchQuery]);

    if (loading) {
        return <ShimmerUI />;
    }

    return (
        <div className='container-fluid d-flex flex-wrap justify-content-between'>
            {Youtubedata.map(video => (
                <CardComponent 
                    key={video.id.videoId}
                    title={video.snippet.title}
                    description={video.snippet.description}
                    img={video.snippet.thumbnails.high.url}
                    videoId={video.id.videoId}
                    
                />
            ))}
        </div>
    );
}

export default BodyComponent;