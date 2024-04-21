

export default function Main(){

    
    return(
        <div className="col-md-6 d-flex flex-column align-items-center text-center">
            <p className="fw-bold mb-2" style={{fontSize: "3rem"}}>
                The Harmonic Hour
            </p>
            <p className="mb-3" style={{fontSize: "1.15em"}}>
                A fun loving podcast from high school musicians discussing about topics from classical to modern genres
            </p>
            <img src={require("./harmonichour.png")} alt="logo" style={{maxWidth: "45%"}}></img>
        </div>
    )
}