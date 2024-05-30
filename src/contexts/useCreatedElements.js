import { useReducer } from "react"

export const ACTIONS = {
  EDIT_HERO: "hero_img",
  EDIT_TITLE: "hero_title",
  EDIT_DESCRIPTION: "hero_description",
  EDIT_BG_COLOR: "bg_color",
  EDIT_TITLE_FONT: "title_font",
  EDIT_BODY_FONT: "body_font",
  ADD_SECTION: "add_section",
  DELETE_SECTION: "del_section",
  ADD_ENTRY: "add_entry",
  DELETE_ENTRY: "del_entry"
}

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.EDIT_HERO:
      return { ...state, hero_img: action.payload }
    case ACTIONS.EDIT_TITLE:
      return { ...state, hero_title: action.payload ? action.payload : "Title" }
    case ACTIONS.EDIT_DESCRIPTION:
      return { ...state, hero_description: action.payload }
    case ACTIONS.EDIT_BG_COLOR:
      return { ...state, background_color: action.payload }
    case ACTIONS.EDIT_TITLE_FONT:
      return { ...state, title_font: action.payload }
    case ACTIONS.EDIT_BODY_FONT:
      return { ...state, body_font: action.payload }
    case ACTIONS.ADD_SECTION:
      return { ...state, sections: [...state.sections, action.payload] }
    case ACTIONS.ADD_ENTRY:
      return { ...state, entries: [...state.entries, action.payload] }
    case ACTIONS.DELETE_SECTION:
      return {
        ...state,
        sections: state.sections.filter(section => section !== action.payload)
      }
    case ACTIONS.DELETE_ENTRY:
      return {
        ...state,
        entries: state.entries.filter(entry => entry !== action.payload)
      }
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}

const useCreatedElements = () => {
  const initialState = {
    hero_img: './assets/placeholder.png',
    hero_title: 'Title',
    hero_description: 'Lorem, ipsum dolor sit amet consectetur adipisicing',
    background_color: '#ccc',
    title_font: 'serif',
    body_font: 'sans-serif',
    sections: ["General Fiction", "Sci-fi/Fantasy", "Horror"],
    entries: [
      {
        title: 'sample entry',
        img_src: './assets/placeholder.png',
        rating: '4.5',
        description: 'lorem, ipsum dolor sit amet consectetur adipisicing'
      }]
  }
  const [state, dispatch] = useReducer(reducer, initialState);

  return {
    state,
    dispatch
  }

}

export default useCreatedElements;

