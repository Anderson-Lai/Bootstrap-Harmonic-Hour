import './members.css'

type Props = {
    desc: string,
    image: string,
    alt: string,
}

export default function Members({desc, image, alt}: Props){

    return(
        <div className='col-md-3 desc-div'>
            <p className='pt-1'>{desc}</p>
            <img src={image} alt={alt} className='mt-2 image-styles'></img>
        </div>
    )    
}