import "./index.scss";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="name-logo_container">
        <img
          className="logo_img"
          src="https://png2.cleanpng.com/sh/c22d2ffae665d0f9ae939f54e88c0d4d/L0KzQYm3UsA3N6p2fZH0aYP2gLBuTfNwa5x5edt1LXLodcO0gvFzfJZzfNd7LXnvfMb6lQJifJp0hp9sYYL3f7F1TfJieqVqhtZucj24cYjoU8I0aZVoSdhuNz62SIeBUMM1OmI6SakENUe5SYGCUME3NqFzf3==/kisspng-cocktail-beer-bartender-illustration-cartoon-bartender-5a7a323adc1fe7.3868034215179576909016.png"
          alt="logo"
        />
        <h4>KalaKala</h4>
      </div>

      <ul>
        <li>Home</li>
        <li>Menu</li>
        <li>About us</li>
      </ul>

      <input type="text" placeholder="Search"></input>
    </div>
  );
};

export default Navbar;
