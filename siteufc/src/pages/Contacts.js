import React from "react";
import Nav from "../components/Nav";

const Contacts = () => {
    return(
        <div className='contacts'>
            <Nav />
            <h1>Contacts</h1>
            <div>
                <ul>
                    <li>Personne à contacter:</li>
                    <li>Mail:</li>
                    <li>Tel:</li>   
                </ul> 
            </div>
            <div>
                <form>
                    <label>
                        contacter:
                        <input type="text" name="name" />
                    </label>
                    <input type="submit" value="Envoyer" />
                </form>
            </div>
        </div>
    );
};

export default Contacts;