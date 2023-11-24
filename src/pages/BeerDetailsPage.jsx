import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import RingLoader from "react-spinners/RingLoader";

const loadingStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  paddingTop: "50px",
};

function BeerDetailsPage() {
  const navigate = useNavigate();
  const params = useParams();
  // console.log(params.beerId);

  const [beerDetails, setBeerDetails] = useState(null);
  // console.log(beerDetails);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${params.beerId}`)
      .then((response) => {
        // console.log(response.data);
        setBeerDetails(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        navigate(-1);
      });
  }, [params.beerId]);
  if (loading) {
    return (
      <div style={loadingStyles}>
        <RingLoader color={"rgb(55, 169, 221)"} size={50} />
      </div>
    );
  }
  return (
    <div className="details-container">
      <img src={beerDetails.image_url} alt="beerPic" width={100} />
      <div>
        <div className="card-info" >
        <h1>{beerDetails.name}</h1>
        <p className="att-style">{beerDetails.attenuation_level}</p>
        </div>
        <div className="card-info">
        <h3>{beerDetails.tagline}</h3>
        <p>{beerDetails.first_brewed}</p>
        </div>
        <p className="description-container">{beerDetails.description}</p>
        <p>{beerDetails.contributed_by}</p>
      </div>
    </div>
  );
}

export default BeerDetailsPage;
