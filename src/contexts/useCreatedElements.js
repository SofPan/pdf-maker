import { useReducer } from "react"

export const DEFAULTS = {
  IMG: './assets/placeholder.png',
  TITLE: 'Title',
  DESCRIPTION: 'Lorem, ipsum dolor sit amet consectetur adipisicing'
}

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
  console.log("receiving in useCreatedElements", action);
  switch (action.type) {
    case ACTIONS.EDIT_HERO:
      return { ...state, hero_img: action.payload ? action.payload : DEFAULTS.IMG }
    case ACTIONS.EDIT_TITLE:
      return { ...state, hero_title: action.payload ? action.payload : DEFAULTS.TITLE }
    case ACTIONS.EDIT_DESCRIPTION:
      return { ...state, hero_description: action.payload ? action.payload : DEFAULTS.DESCRIPTION }
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
    hero_img: DEFAULTS.IMG,
    hero_title: DEFAULTS.TITLE,
    hero_description: DEFAULTS.DESCRIPTION,
    background_color: '#ccc',
    title_font: 'serif',
    body_font: 'sans-serif',
    sections: [
      {
        id: 1,
        genre: "General Fiction"
      }, {
        id: 2,
        genre: "Sci-fi/Fantasy",
      },
      {
        id: 3,
        genre: "Horror"
      }
    ],
    entries: [
      {
        id: 1,
        title: 'Fiction entry',
        img_src: DEFAULTS.IMG,
        rating: '4.5',
        description: '4 COLUMNS I love cheese, especially cauliflower cheese cheese on toast. Port-salut feta monterey jack babybel manchego danish fontina fondue cheddar. Dolcelatte cut the cheeseDolcelatte cut the cheese',
        section: 'General Fiction'
      },
      // {
      //   id: 4,
      //   title: 'Fiction entry',
      //   img_src: DEFAULTS.IMG,
      //   rating: '4.5',
      //   description: '4 COLUMNS I love cheese, especially cauliflower cheese cheese on toast. Port-salut feta monterey jack babybel manchego danish fontina fondue cheddar. Dolcelatte cut the cheeseDolcelatte cut the cheese',
      //   section: 'General Fiction'
      // },
      // {
      //   id: 5,
      //   title: 'Fiction entry',
      //   img_src: DEFAULTS.IMG,
      //   rating: '4.5',
      //   description: '4 COLUMNS I love cheese, especially cauliflower cheese cheese on toast. Port-salut feta monterey jack babybel manchego danish fontina fondue cheddar. Dolcelatte cut the cheeseDolcelatte cut the cheese',
      //   section: 'General Fiction'
      // },
      // {
      //   id: 6,
      //   title: 'Fiction entry',
      //   img_src: DEFAULTS.IMG,
      //   rating: '4.5',
      //   description: '4 COLUMNS I love cheese, especially cauliflower cheese cheese on toast. Port-salut feta monterey jack babybel manchego danish fontina fondue cheddar. Dolcelatte cut the cheeseDolcelatte cut the cheese',
      //   section: 'General Fiction'
      // },
      // {
      //   id: 2,
      //   title: 'Scifi entry',
      //   img_src: DEFAULTS.IMG,
      //   rating: '4.5',
      //   description: '3 COLUMNS I love cheese, especially cauliflower cheese cheese on toast. Port-salut feta monterey jack babybel manchego danish fontina fondue cheddar. Dolcelatte cut the cheese swiss blue castello boursin cut the cheese cheesy feet cheese and biscuits. Cheese and biscuits squirty cheese cheese strings. I love cheese, especially cauliflower cheese cheese on toast. Port-salut feta monterey jack babybel manchego danish fontina fondue cheddar.',
      //   section: 'Sci-fi/Fantasy'
      // },
      // {
      //   id: 7,
      //   title: 'Scifi entry',
      //   img_src: DEFAULTS.IMG,
      //   rating: '4.5',
      //   description: '3 COLUMNS I love cheese, especially cauliflower cheese cheese on toast. Port-salut feta monterey jack babybel manchego danish fontina fondue cheddar. Dolcelatte cut the cheese swiss blue castello boursin cut the cheese cheesy feet cheese and biscuits. Cheese and biscuits squirty cheese cheese strings. I love cheese, especially cauliflower cheese cheese on toast. Port-salut feta monterey jack babybel manchego danish fontina fondue cheddar.',
      //   section: 'Sci-fi/Fantasy'
      // },
      // {
      //   id: 8,
      //   title: 'Scifi entry',
      //   img_src: DEFAULTS.IMG,
      //   rating: '4.5',
      //   description: '3 COLUMNS I love cheese, especially cauliflower cheese cheese on toast. Port-salut feta monterey jack babybel manchego danish fontina fondue cheddar. Dolcelatte cut the cheese swiss blue castello boursin cut the cheese cheesy feet cheese and biscuits. Cheese and biscuits squirty cheese cheese strings. I love cheese, especially cauliflower cheese cheese on toast. Port-salut feta monterey jack babybel manchego danish fontina fondue cheddar.',
      //   section: 'Sci-fi/Fantasy'
      // },
      // {
      //   id: 3,
      //   title: 'Horror entry',
      //   img_src: DEFAULTS.IMG,
      //   rating: '4.5',
      //   description: '2 COLUMNS I love cheese, especially cauliflower cheese cheese on toast. Port-salut feta monterey jack babybel manchego danish fontina fondue cheddar. Dolcelatte cut the cheese swiss blue castello boursin cut the cheese cheesy feet cheese and biscuits. Cheese and biscuits squirty cheese cheese strings.I love cheese, especially cauliflower cheese cheese on toast. Port-salut feta monterey jack babybel manchego danish fontina fondue cheddar. Dolcelatte cut the cheese swiss blue castello boursin cut the cheese cheesy feet cheese and biscuits. Cheese and biscuits squirty cheese cheese strings cut the cheese cheesy feet cheese and biscuits. Cheese and biscuits squirty cheese cheese strings.',
      //   section: 'Horror'
      // },
      // {
      //   id: 9,
      //   title: 'Horror entry',
      //   img_src: DEFAULTS.IMG,
      //   rating: '4.5',
      //   description: '2 COLUMNS I love cheese, especially cauliflower cheese cheese on toast. Port-salut feta monterey jack babybel manchego danish fontina fondue cheddar. Dolcelatte cut the cheese swiss blue castello boursin cut the cheese cheesy feet cheese and biscuits. Cheese and biscuits squirty cheese cheese strings.I love cheese, especially cauliflower cheese cheese on toast. Port-salut feta monterey jack babybel manchego danish fontina fondue cheddar. Dolcelatte cut the cheese swiss blue castello boursin cut the cheese cheesy feet cheese and biscuits. Cheese and biscuits squirty cheese cheese strings cut the cheese cheesy feet cheese and biscuits. Cheese and biscuits squirty cheese cheese strings.',
      //   section: 'Horror'
      // },
      // {
      //   id: 10,
      //   title: 'Horror entry',
      //   img_src: DEFAULTS.IMG,
      //   rating: '4.5',
      //   description: '1 COLUMN I love cheese, especially cauliflower cheese cheese on toast. Port-salut feta monterey jack babybel manchego danish fontina fondue cheddar. Dolcelatte cut the cheese swiss blue castello boursin cut the cheese cheesy feet cheese and biscuits. Cheese and biscuits squirty cheese cheese strings.I love cheese, especially cauliflower cheese cheese on toast. Port-salut feta monterey jack babybel manchego danish fontina fondue cheddar. Dolcelatte cut the cheese swiss blue castello boursin cut the cheese cheesy feet cheese and biscuits. Cheese and biscuits squirty cheese cheese strings cut the cheese cheesy feet cheese and biscuits. Cheese and biscuits squirty cheese cheese strings.Port-salut feta monterey jack babybel manchego danish fontina fondue cheddar. Dolcelatte cut the cheese swiss blue castello boursin cut the cheese cheesy feet cheese and biscuits. Cheese and biscuits squirty cheese cheese strings cut the cheese cheesy feet cheese and biscuits. Cheese and biscuits squirty cheese cheese string',
      //   section: 'Horror'
      // }
    ]
  }
  const [state, dispatch] = useReducer(reducer, initialState);

  return {
    state,
    dispatch
  }

}

export default useCreatedElements;

