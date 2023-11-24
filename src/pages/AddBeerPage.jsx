import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Form from "react-bootstrap/Form";

const btnStyles={
    backgroundColor: "rgb(55, 169, 221)",
    border: "none", 
    paddingLeft: "167px", 
    paddingRight: "167px" 
}

function AddBeerPage() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [firstBrewed, setFirstBrewed] = useState("");
  const [tips, setTips] = useState("");
  const [attenuation, setAttenuation] = useState(0);
  const [contributedBy, setContributedBy] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleTaglineChange = (event) => {
    setTagline(event.target.value);
  };
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };
  const handleFirstBrewedChange = (event) => {
    setFirstBrewed(event.target.value);
  };
  const handleTipsChange = (event) => {
    setTips(event.target.value);
  };
  const handleAttenuationChange = (event) => {
    setAttenuation(event.target.value);
  };
  const handleContributedByChange = (event) => {
    setContributedBy(event.target.value);
  };
  const handleImageUrlChange = (event) => {
    setImageUrl(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const newBeer = {
      name: name,
      tagline: tagline,
      description: description,
      image_url: imageUrl,
      first_brewed: firstBrewed,
      brewers_tips: tips,
      attenuation_level: attenuation,
      contributed_by: contributedBy,
    };
    console.log(newBeer);
    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", newBeer)
      .then((response) => {
        console.log(response);
        navigate("/beers");
      })
      .catch((err) => {
        console.log(err);
        navigate(-1);
      });
  };

  return (
    <div>
    <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 form-label" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={name}
            onChange={handleNameChange}
          />
        </Form.Group >
        <Form.Group className="mb-3 form-label" controlId="tagline">
          <Form.Label>Tagline</Form.Label>
          <Form.Control
            type="text"
            name="tagline"
            value={tagline}
            onChange={handleTaglineChange}
          />
        </Form.Group>
        <Form.Group className="mb-3 form-label" controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="description"
            value={description}
            onChange={handleDescriptionChange}
          />
        </Form.Group>
        {/* <Form.Group className="mb-3" controlId="image">
          <Form.Label>Upload Image</Form.Label>
          <Form.Control
            type="file"
            name="image"
            value={imageUrl}
            onChange={handleImageUrlChange}
          />
        </Form.Group> */}
        <Form.Group className="mb-3 form-label" controlId="first_brewed">
          <Form.Label>First Brewed</Form.Label>
          <Form.Control
            type="text"
            name="first_brewed"
            value={firstBrewed}
            onChange={handleFirstBrewedChange}
          />
        </Form.Group>
        <Form.Group className="mb-3 form-label" controlId="brewers_tips">
          <Form.Label>Brewer's Tips</Form.Label>
          <Form.Control
            type="text"
            name="brewers_tips"
            value={tips}
            onChange={handleTipsChange}
          />
        </Form.Group>
        <Form.Group className="mb-3 form-label" controlId="attenuation_level">
          <Form.Label>Attenuation Level</Form.Label>
          <Form.Control
            type="number"
            name="attenuation_level"
            value={attenuation}
            onChange={handleAttenuationChange}
          />
        </Form.Group>
        <Form.Group className="mb-3 form-label" controlId="contributed_by">
          <Form.Label>Contributed By</Form.Label>
          <Form.Control
            type="text"
            name="contributed_by"
            value={contributedBy}
            onChange={handleContributedByChange}
          />
        </Form.Group>
        <Button style={btnStyles} type="submit">
          Add Beer
        </Button>
      </Form>
    </div>
  );
}

export default AddBeerPage;
