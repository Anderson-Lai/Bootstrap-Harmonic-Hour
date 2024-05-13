import Suggestions from "./suggestions/suggestions";
import Main from "./main/main";
import Links from "./links/links";
import Members from './members/members'

type descTypes = {
  remy: string,
  andy: string,
  lucas: string,
  isaac: string,
}

type hrefTypes = {
  spotify: string,
  instagram: string,
}

function App() {

  const desc: descTypes = {
    remy: "hi i’m remy, the mother of this podcast, everything we say is sort of a joke, " + 
          "otherwise i like playing the saxophone, ukulele, piano, my harmonica. " + 
          "u can find me editing videos on my free time or listening to some jazz, " +
          "beabadoobee, joji or other rnb. I love jazz, please enjoy our podcast 🙏🙏",
    andy: "Hi! I'm Anderson. I sometimes get called an old man because " +
          "I like classical music, but besides that I'm pretty normal. " +
          "I play piano, badminton, and sometimes do some math. " + 
          "In my spare time, I enjoy programming and teaching myself new things.",
    lucas:"Hi I'm Lucas I play piano sometimes. " + 
          "I am not responsible for anything I say on this podcast. " +
          "Outside of this podcast I do things like badminton sometimes " + 
          "and I love playing roblox :3 plz play with me.",
    isaac: "Hi im isaac, your average delulu kpop stan, and probably the " + 
          "least experienced pianist here. My only instrument is piano, " + 
          "but i know how to play hot cross " + 
          "bun on the recorder, and I'm pretty proud of that! Personally, " +
          "my music taste is all over the place, but mainly i listen to " +
          "kpop and classical. Stan newjeans!!!",
  };

  const href: hrefTypes = {
    spotify: "https://open.spotify.com/show/3I2HV6aNvwVJN8iFRuM3wz",
    instagram: "https://www.instagram.com/theharmonichour/",
  };

  return (
    <>
      <div className="row mx-0 mt-3 mb-4 px-0 py-0" style={{height: "fitContent"}}>
        <Suggestions />
        <Main />
        <div className="col-md-3 d-flex flex-column align-items-center justify-content-center text-center">
          <p className='fw-bold fs-1'>Find us on:</p>
          <Links cssId="spotify-button" name="Spotify" href={href.spotify}/> 
          <Links cssId="instagram-button" name="Instagram" href={href.instagram}/> 
        </div>
      </div>
      <div className="text-center m-0">
        <p className="fw-bold fs-2">Members</p>
      </div>
      <div className="container-fluid mx-0 my-0 px-0 py-0  d-flex justify-content-between" style={{height: "fitContent"}}>
        <div className='row m-0 px-3 py-0'>
          <Members alt="remy" image="member-images/remy.jpg" desc={desc.remy} />
          <Members alt="anderson" image="member-images/andy.jpg" desc={desc.andy} />
          <Members alt="lucas" image="member-images/lucas.jpg" desc={desc.lucas} />
          <Members alt="isaac" image="member-images/isaac.jpg" desc={desc.isaac} />
        </div>
      </div>
    </>
  );
}

export default App;
