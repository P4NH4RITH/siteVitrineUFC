import React from "react";
import { Component } from "react";
import FighterData from "../team.json";

class FighterCard extends Component {
  render() {
    return (
      <div>
        <h1 className="text-center">La liste de nos membres</h1>
        <div>
          {FighterData.map((FighterDetails, index) => {
            return (
              <div className="flex-members">
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    className="card-img-top"
                    src="https://placeimg.com/200/200/people?random01"
                    alt="ff"
                  />
                  <div className="card-body">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">
                        Nom: {FighterDetails.first_name}
                      </li>
                      <li className="list-group-item">
                        Prénom: {FighterDetails.last_name}
                      </li>
                      <li className="list-group-item">
                        taille: {FighterDetails.size}
                      </li>
                      <li className="list-group-item">
                        poid: {FighterDetails.weight}
                      </li>
                      <li className="list-group-item">
                        style de combat: {FighterDetails.style}
                      </li>
                      <li className="list-group-item"></li>
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default FighterCard;
