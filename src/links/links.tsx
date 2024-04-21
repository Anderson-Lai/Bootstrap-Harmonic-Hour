import './links.css'

export default function Links(){


    return(
        <div className="col-md-3 d-flex flex-column align-items-center justify-content-center">
            <p className='fw-bold fs-1'>Find us on:</p>
            <a href='https://open.spotify.com/show/3I2HV6aNvwVJN8iFRuM3wz' target='_blank' rel="noreferrer">
                <button className='mb-4 fs-2 py-0 px-2 btn btn-dark custom-link-button' id='spotify-button'>Spotify</button>
            </a>
            <a href='https://www.instagram.com/theharmonichour/' target='_blank' rel="noreferrer">
                <button className='mb-4 fs-2 py-0 px-2 btn btn-dark custom-link-button' id='instagram-button'>Instagram</button>
            </a>
        </div>
    )
}