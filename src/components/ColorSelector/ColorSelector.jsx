import SaveAndCancelButtons from "../GeneralComponents/SaveAndCancelButtons";

const ColorSelector = (props) => {
  // contrast or similar passed down by props
  // Contrast for accessibility and text
  // Similar to pick out color from hero image
  return(
    <>
      <p>Color Selector</p>
      <SaveAndCancelButtons />
    </>
  )
}

export default ColorSelector;