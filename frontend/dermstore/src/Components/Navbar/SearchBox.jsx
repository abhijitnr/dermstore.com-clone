import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "../../css/Navbar_css/search.css";
import recomendNames from "./searchRecomendations.json";

const recomend = val => {
    if (val)
        return recomendNames.filter(e => e && e.toLowerCase().includes(val.toLowerCase())).slice(0, 5);
    else return []
}

let id;


export default function SearchBox() {
    const nv = useNavigate()
    const [results, setResults] = useState([]);
    const [suggetions, setSuggetions] = useState([]);
    const [active, setActive] = useState(0);

    const search = (val) =>
        axios.get(`https://wild-polo-shirt-calf.cyclic.app/products?q=${val}`)
            .then((res) => setResults(res.data))

    const debounce = val => {
        setSuggetions(recomend(val));
        clearTimeout(id);
        id = setTimeout(() => val && search(val), 1000);
    }

    const handleClick = (e) => {
        document.querySelector('.seacrch_input').value = e;
        setSuggetions([]);
    }

    return (
        <div className='searchbox'>
            <input
                onBlur={() => {
                    setActive(!active);
                    document.querySelector('#app').style.backgroundColor = "white";
                }}
                onFocus={() => {
                    setActive(!active)
                    document.querySelector('#app').style.backgroundColor = "rgb(0, 0, 0,0.5)";
                }}
                onChange={e => debounce(e.target.value)}
                type="text" className="seacrch_input"
                placeholder="Search for a product or brand..."
            />
            {active && <div className='searchResults'>
                <div className='searchSuggetions'>
                    {
                        active && !results.length && suggetions.length > 1 && suggetions.map((e, i) => (
                            <p
                                key={i}
                                onClick={() => handleClick(e)}
                            >{e}</p>
                        ))
                    }
                </div>
                {results.length > 1 && <div className='searchProducts'>
                    {
                        results.map((e, i) => (<div 
                        className='productRes' key={i}>
                            <img
                            src={e.img} alt="" />
                            <div >
                                <p >
                                    {
                                        e.name && e.name.split("").map((el, i) => (
                                            <span
                                                style={{ color: document.querySelector('.seacrch_input').value.includes(el) ? "red" : "black" }}
                                                key={i}>{el}</span>
                                        ))
                                    }
                                </p>
                                <p>{e.price ? e.price : (50 * Math.random()).toFixed(2)}$</p>
                            </div>
                        </div>))
                    }
                </div>}
            </div>}
        </div >
    )
}
