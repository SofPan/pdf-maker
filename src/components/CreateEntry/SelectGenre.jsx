import { useContext, useState } from "react";
import { AppContext } from "../../App";

const SelectGenre = () => {
  const {state} = useContext(AppContext);

  const [selection, setSelection] = useState(state.sections[0].genre);

  const mapSections = state.sections.map(section => {
    return <option key={section.id} value={section.genre}>{section.genre}</option>
  });

  const handleChange = (e) => {
    setSelection(e.target.value);
  }

  return(
    <select value={selection} onClick={e => e.stopPropagation()} onChange={handleChange}>
      {mapSections}
    </select>
  )
}

export default SelectGenre;