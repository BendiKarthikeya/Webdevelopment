function CardComponent(props) {
    return (
        <div className="card" style={{ width: '20rem', height: '20rem', margin: '10px' ,borderRadius: '15px'}}>
            
            <img src={props.img} alt={props.title} style={{ width: '20rem', height: '15rem',borderRadius: '15px' }} />
            <div className="card-body" style={{marginTop:'-10px'}}>
                <p style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>{props.title}</p>
            </div>

        </div>
    )
}

export default CardComponent;
