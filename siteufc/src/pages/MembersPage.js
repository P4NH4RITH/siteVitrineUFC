import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import FighterCard from './FighterCard';

const MembersPage = () => {
    // const [data, setData] = useState([]);
    // const [sortedData, setSortedData] = useState([]);
    // const [playOnce, setPlayOnce] = useState(true);
    // const [rangeValue, setRangeValue] = useState(40);
    // const [selectedRadio, setSelectedRadio] = useState('');
    // const radios = ["Africa", "America", "Asia", "Europe", "Oceania"]

    return ( 
        <div>
            <Logo/>
            <Navigation/>
            <FighterCard/>
            <Footer/>
        </div>
    )
}

export default MembersPage