import { useState } from "react";

function CardComponent(props) {
    const [playVideo, setPlayVideo] = useState(false);

    return (
    <div 
            className="card" 
            style={{ width: '20rem', height: '20rem', margin: '10px',borderRadius: '15px',overflow: 'hidden', cursor: 'pointer',boxShadow: '0px 4px 10px rgba(0,0,0,0.2)'
            }}
            onClick={() => setPlayVideo(true)}
    >
        {playVideo ? (
            <iframe width="100%" height="100%" src={`https://www.youtube-nocookie.com/embed/${props.videoId}`}
                title={props.title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen onError={() => window.open(`https://www.youtube.com/watch?v=${props.videoId}`, "_blank")}
            ></iframe>
        ) : (
        <>
        <img src={props.img} alt={props.title} style={{ width: "100%", height: "15rem", objectFit: "cover" }} />
        <div className="card-body" style={{ padding: "10px" }}>
            <p style={{ fontWeight: "bold", fontSize: "0.9rem" }}>{props.title}</p>
        </div>
        </>
        )}

        </div>
    );
}

export default CardComponent;
