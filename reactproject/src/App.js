import { Route } from "react-router-dom" ;
import sumitpro02 from "./Sumitfolder/sumitpro02" ;
import SumitHomepage from "./Sumitfolder/SumitHomepage" ;

function App(){
  return(
    <>
      <Route path = "/" exact component = {SumitHomepage} />
      <Route path = "/contact" exact component = {sumitpro02} />
    </>   
  );
}
export default App ;