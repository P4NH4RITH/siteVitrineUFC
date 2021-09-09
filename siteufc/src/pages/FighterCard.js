import React from "react";
import { Component } from "react";
import FighterData from "../data/team.json";
// import Card from "../components/Card";
import images from './data/team.json'

class FighterCard extends Component {

  render() {
    return (
      <div>
        <h1>La liste de nos membres</h1>
        <div>
          {FighterData.map((FighterDetails, index) => { 
            return (
              <div key={FighterDetails.first_name} className="fighter">
                <h3>{FighterDetails.pics}</h3>
                <h3>Nom: {FighterDetails.first_name}</h3>
                <h3>Prénom: {FighterDetails.last_name}</h3>
                <h4>taille: {FighterDetails.size}</h4>
                <h4>poid: {FighterDetails.weight}</h4>
                <h4>style de combat: {FighterDetails.style}</h4>
              </div> 
            );
          })}
        </div>
      </div>
    );
  }
}

export default FighterCard;
