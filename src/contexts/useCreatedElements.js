

export const useCreatedElements = () => {
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

}

