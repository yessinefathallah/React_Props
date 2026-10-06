import players from "../Players";
import Player from "./Player";

const PlayerList = () => {
    return (
        <div className="container py-4">
            <div className="row g-3">
                {players.map((player) => (
                    <div className="col-12 col-sm-6 col-lg-4" key={player.name}>
                        <Player {...player} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PlayerList;