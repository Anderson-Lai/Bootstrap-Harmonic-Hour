import './suggestions.css'

export default function Suggestions(){

    const email = "theharmonichour@gmail.com";

    function handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>){
        const target = e.target as HTMLElement;

        target.textContent = "Copied!";
        navigator.clipboard.writeText(email);
    }

    function handleMouseOut(e: React.MouseEvent<HTMLButtonElement, MouseEvent>){
        const target = e.target as HTMLElement;

        setTimeout(() => {
            target.textContent = "Copy Link";
        }, 350)
    }

    return(
        <div className="col-md-3 d-flex flex-column align-items-center justify-content-center text-center">
            <p className="fw-bold mx-0 fs-2 mb-3">
                Send us suggestions!
            </p>
            <p className="mb-0 fs-5 mb-2">Email us:</p>
            <p className='fs-5'>{email}</p>
            <button className="fs-4 btn btn-dark py-1 px-2 custom-button-style" onClick={(e) => handleClick(e)}
                onMouseOut={(e) => handleMouseOut(e)}>
                Copy Link</button>
        </div>
    )
}