import './links.css'

type Props = {
    href: string,
    name: string,
    gradient: string,
}

export default function Links({href, name, gradient}: Props){

    return(
        <a href={href} target='_blank' rel="noreferrer">
            <button className='mb-4 fs-2 py-0 px-2 btn btn-dark custom-link-button' 
            style={{backgroundImage: gradient}}>{name}</button>
        </a>
    )
}