export default function Hero() {
    return (
      <div className="hero">
        <div className="hero-copy">
          <p>
            <span>Gentle and restorative yoga practice</span> from the comfort
            of your own home.
          </p>
        </div>
        <img
          src="./images/undraw_meditation_re_gll0.svg"
          alt="yoga"
          className="hero-img"
        />
        <div className="hero-price">
          <h3>£25</h3>
          <p>per month</p>
        </div>
      </div>
    );
}