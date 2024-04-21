import Suggestions from "./suggestions/suggestions";
import Main from "./main/main";
import Links from "./links/links";
import Members from './members/members'

function App() {
  return (
    <>
      <div className="row mx-0 my-4 px-0 py-0" style={{height: "fitContent"}}>
        <Suggestions />
        <Main />
        <Links />
        
      </div>
      <div className="text-center">
        <p className="fw-bold fs-2">Members</p>
      </div>
      <div className="container-fluid mx-0 my-4 px-0 py-0  d-flex d-flex justify-content-between" style={{height: "fitContent"}}>
        <Members />
      </div>
    </>
  );
}

export default App;
