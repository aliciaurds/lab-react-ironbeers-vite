import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RingLoader } from "react-spinners";

const loadingStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  paddingTop: "50px",
};

function AllBeersPage() {
  //redirecciones
  const navigate = useNavigate();

  const [beerList, setBeerList] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchBeer, setSearchBeer] = useState("");

  useEffect(() => {
    beerData();
  }, [searchBeer]);

  const beerData = async () => {
    try {
      let url = "https://ih-beers-api2.herokuapp.com/beers"
      
      if (searchBeer) {            
        console.log(searchBeer);
        url = `https://ih-beers-api2.herokuapp.com/beers/search?q=${searchBeer}`
      }
      const response = await axios.get(url);
      // console.log(response.data);
      setBeerList(response.data)
      setLoading(false);
    } catch (err) {
      console.log(err);
      navigate(-1);
    }
  };
  
  const handleQueryChange = (event) => {
    setSearchBeer(event.target.value);
  }

  if (loading) {
    return (
      <div style={loadingStyles}>
        <RingLoader color={"rgb(55, 169, 221)"} size={50} />
      </div>
    );
  }
  return (
    <div style={{marginTop: "50px"}}>
      <input
        type="text"
        placeholder="Search"
        onChange={handleQueryChange}
        value={searchBeer}
      />
        {beerList.map((eachBeer) => {
          return (
            <div style={{padding: "30px"}} key={eachBeer._id}>
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to={`/beers/${eachBeer._id}`}
              >
                <img src={eachBeer.image_url} alt="beerPic" width={100} />
                <div>
                  <h2>{eachBeer.name}</h2>
                  <p>{eachBeer.tagline}</p>
                  <p>Contributed by: {eachBeer.contributed_by}</p>
                </div>
              </Link>
            </div>
          );
        })}
      
    </div>
  );
}

export default AllBeersPage;
