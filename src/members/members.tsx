import './members.css'

export default function Members(){


    return(
        <div className='row m-0 p-3'>
            <div className='col-md-3 desc-div'>
                <p>
                    hi i’m remy, the mother of this podcast, everything we say is sort of a joke, 
                    otherwise i like playing the saxophone, ukulele, piano, my harmonica. 
                    u can find me editing videos on my free time or listening to some jazz, 
                    beabadoobee, joji or other rnb. I love jazz, please enjoy our podcast 🙏🙏
                </p>
                <img src={require('./remy.png')} alt='remy' style={{
                    maxWidth: "35%",
                    paddingLeft: "10px",
                }}></img>
            </div>
            <div className='col-md-3 desc-div'>
                <p>
                    Hi! I'm Anderson. I sometimes get called an old man because 
                    I like classical music, 
                    but besides that I'm pretty normal. I play piano, badminton, 
                    and sometimes do some math. 
                    In my spare time, I enjoy programming and teaching myself new things.
                </p>
                <img src={require('./andy.jpg')} alt='anderson' style={{
                    maxWidth: "35%",
                    paddingLeft: "10px",
                }}></img>
            </div>
            <div className='col-md-3 desc-div'>
                <p>
                    Hi I'm Lucas I play piano sometimes. 
                    I am not responsible for anything I say on this podcast. 
                    Outside of this podcast I do things like badminton sometimes 
                    and I love playing roblox :3 plz play with me.
                </p>
                <img src={require('./lucas.jpg')} alt='lucas' style={{
                    maxWidth: "35%",
                    paddingLeft: "10px",
                }}></img>
            </div>
            <div className='col-md-3 desc-div'>
                <p>
                    Hi im isaac, your average delulu kpop stan, and probably the 
                    least experienced pianist here. My only instrument is piano, 
                    but i know how to play hot cross 
                    bun on the recorder, and I'm pretty proud of that! Personally, 
                    my music taste is all over the place, but mainly i listen to 
                    kpop and classical. Stan newjeans!!!
                </p>
                <img src={require('./isaac.jpg')} alt='isaac' style={{
                    maxWidth: "35%",
                    paddingLeft: "10px",
                }}></img>
            </div>
        </div>
    )
}