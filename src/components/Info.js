export default function Info() {
  return (
    <div className="info">
      <div className="info-flow">
        <h2>Gentle Yoga Flow</h2>
        <p>
          Come and join me online for a gentle flow class with a lovely
          relaxation at the end. You will receive a warm welcome and leave
          feeling refreshed, relaxed and connected. Everyone is very welcome and
          if you have never tried yoga before, come and give it a go from the
          comfort of your home!
        </p>
        <img
          src="./images/meditation-yoga.svg"
          alt="quote marks"
          className="meditation info-img"
        />
      </div>
      <div className="info-restorative">
        <h2>Restorative Yoga</h2>
        <p>
          Come and join me online for a restorative class full of relaxation.
          Everyone is very welcome and if you have never tried yoga before, come
          and give it a go from the comfort of your home!
        </p>
        <img src="./images/lotus.svg" alt="lotus" className="lotus info-img" />
      </div>
      <div className="info-quote">
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
          placerat nunc sed leo cursus laoreet."
        </p>
        <img
          src="./images/quote-right.svg"
          alt="quote marks"
          className="quote-marks info-img"
        />
      </div>
    </div>
  );
}
