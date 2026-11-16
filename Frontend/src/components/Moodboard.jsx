import "../styles/Moodboard.css"

function Moodboard(){

    const images=[
    { id: 1, src: "/images/focus-banner.jpg", alt: "A quiet café" },
    { id: 2, src: "/images/planning.jpg", alt: "Planning journal" },
    { id: 3, src: "/images/reading.jpg", alt: "Reading corner" },
    { id: 4, src: "/images/journaling.jpg", alt: "Journal and desk" },
    ];

    return(
        <section className="moodboard">
            <div className="moodboard-header">
                <h2>Moodboard</h2>
                  <nav className="moodboard-categories">
                    <span className="active">ALL</span>
                    <span>PLACES</span>
                    <span>PEOPLE</span>
                    <span>DETAILS</span>
                    </nav>

                    <button className="moodboard-add">+</button>
            </div>

            <div className="moodboard-images">
                {images.map((image)=>{
                    return (
                        <div className="moodboard-image" key={image.id}>
                            <img src={image.src} alt={image.alt}/>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default Moodboard;