import React from "react";
import Card from "../components/Card";
import Nav from "../components/Nav";

const Members = () => {
    return(
        <div className='Members'>
            <Nav />
            <h1>Membres</h1>
            <section>
                Membres texte texte texte texte texte texte texte texte texte texte texte
                texte texte texte texte texte texte texte texte texte texte texte texte
            </section>
            <section>
                <Card />
                <Card />
                <Card />
                <Card />
            </section>
        </div>
    );
};

export default Members;