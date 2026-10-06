import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";

const Player = ({
    name = "Unknown player",
    team = "Unknown team",
    nationality = "Unknown nationality",
    jerseyNumber = "N/A",
    age = "N/A",
    imageUrl = "",
}) => {
    return (
        <Card style={{ width: "18rem" }}>
            {imageUrl && <Card.Img variant="top" src={imageUrl} alt={name} />}
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    Team: {team}
                        <br />
                            Nationality: {nationality}
                                <br />
                            Jersey number: {jerseyNumber}
                        <br />
                    Age: {age}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default Player;