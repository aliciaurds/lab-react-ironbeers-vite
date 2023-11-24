import { useEffect, useState } from "react";
import RingLoader from "react-spinners/RingLoader";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const loadingStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "50px",
  };

function RandomBeersPage() {
  const navigate = useNavigate();
  const [randomBeer, setRandomBeer] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    randomBeerData();
  }, []);


  const randomBeerData = async () => {
    try {
      const response = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers/random"
      );
      setRandomBeer(response.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
      navigate(-1);
    }
  };
  if (loading) {
    return (
      <div style={loadingStyles}>
        <RingLoader color={"rgb(55, 169, 221)"} size={50} />
      </div>
    );
  }
  return (
    <div className="details-container">
    <img src={randomBeer.image_url} alt="beerPic" width={100} />
    <div>
      <div className="card-info" >
      <h1>{randomBeer.name}</h1>
      <p className="att-style">{randomBeer.attenuation_level}</p>
      </div>
      <div className="card-info">
      <h3>{randomBeer.tagline}</h3>
      <p>{randomBeer.first_brewed}</p>
      </div>
      <p className="description-container">{randomBeer.description}</p>
      <p>{randomBeer.contributed_by}</p>
    </div>
  </div>
  )
}

export default RandomBeersPage;
