const StarRatings = () => {
  return(
  <form className="rating" onClick={e => e.stopPropagation()}>
    <label>
      <input type="radio" name="stars" value="1" />
      <span className="icon">★</span>
    </label>
    <label>
      <input type="radio" name="stars" value="2" />
      <span className="icon">★</span>
      <span className="icon">★</span>
    </label>
    <label>
      <input type="radio" name="stars" value="3" />
      <span className="icon">★</span>
      <span className="icon">★</span>
      <span className="icon">★</span>   
    </label>
    <label>
      <input type="radio" name="stars" value="4" />
      <span className="icon">★</span>
      <span className="icon">★</span>
      <span className="icon">★</span>
      <span className="icon">★</span>
    </label>
    <label>
      <input type="radio" name="stars" value="5" />
      <span className="icon">★</span>
      <span className="icon">★</span>
      <span className="icon">★</span>
      <span className="icon">★</span>
      <span className="icon">★</span>
    </label>
</form>
  )
}

export default StarRatings;