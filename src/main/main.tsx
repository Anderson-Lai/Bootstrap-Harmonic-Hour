

export default function Main(){

    
    return(
        <div className="col-md-6 d-flex flex-column text-center align-items-center">
            <p className="fw-bold mb-4" style={{fontSize: "3rem"}}>
                The Harmonic Hour
            </p>
            <p className="mb-5" style={{fontSize: "1.15em"}}>
                A fun loving podcast from high school musicians discussing about topics from classical to modern genres
            </p>
            <img src={require("./harmonichour.png")} alt="logo" style={{maxWidth: "50%"}}></img>
        </div>
    )
}