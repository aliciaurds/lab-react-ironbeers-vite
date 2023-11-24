import { Link } from "react-router-dom";
import AllBeerImg from "../assets/beers.png";
import RandomBeerImg from "../assets/random-beer.png";
import NewBeerImg from "../assets/new-beer.png";

function HomePage() {
  return (
    <div>
      <div>
        <Link to={"/beers"}>
          <img src={AllBeerImg} alt="beerPic" />
          <br />
          <h2 className="title-container">All Beers</h2>
          <p className="text-container">Hops malt brewhouse barley, pilsner brewpub hops cold filter yeast cold brewpub hops lager. Malt keg beer porter hops hops. Cold alcohol barley, hops barley alcohol hops yeast. Hops pint yeast hops pint keg. Lager malt beer hops malt. Brew brew brewhouse brewhouse hops malt brewpub brewhouse. Brew hops beer cold. Yeast pint porter hops beer hops beer lager porter yeast. Malt brewhouse beer malt pint cold porter. Yeast barley keg cold brewpub cold hops yeast.</p>
        </Link>
      </div>
      <div>
        <Link to={"/random-beer"}>
          <img src={RandomBeerImg} alt="randomBeerPic" />
          <br />
          <h2 className="title-container">Random Beer</h2>
          <p className="text-container">Introducing our latest creation: the Citra Burst IPA! This bold and refreshing brew combines the citrusy goodness of Citra hops with a burst of tropical flavors. Brewed with care and innovation, this IPA offers a unique drinking experience that's perfect for the adventurous beer enthusiast. Discover the essence of craft beer excellence with our newest addition!</p>
        </Link>
      </div>
      <div>
        <Link to={"/new-beer"}>
          <img src={NewBeerImg} alt="newBeerPic" /> <br />
          <h2 className="title-container">New Beer</h2>
          <p className="text-container">Crafting exceptional beers since 1875, our brewery prides itself on creating distinctive and flavorful brews that captivate the palate. From our smooth and rich stouts to our crisp and hoppy ales, each sip tells a story of dedication and craftsmanship. Experience the artistry behind every bottle as you savor the depth and complexity of our random selection. Cheers to embracing the unexpected in every pour!</p>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
