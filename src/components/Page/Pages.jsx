import { useContext } from "react";
import Page from "./Page"
import { AppContext } from "../../App";

const Pages = () => {

  const {state} = useContext(AppContext);
  
  const mapPages = state.sections.map(section => {
    return <Page pageTitle={section.genre} key={section.id} />
  })

  return(
    <section>
      {mapPages}
    </section>
  )
}

export default Pages;