export default function MailingList() {
    return (
      <div className="mailing-list-section">
        <div className="mailing-list">
          <h2>Free Affirmation Cards</h2>
          <p>
            Would you like free affirmation cards to promote happiness and self
            worth? Register for my monthly newsletter and it’ll arrive straight
            in your inbox. You’ll also find out first when my classes start.
          </p>
          <form>
            <input type="text" placeholder="Name"></input>
            <input type="email" placeholder="Email"></input>
            <button>Subscribe</button>
          </form>
        </div>
      </div>
    );
}