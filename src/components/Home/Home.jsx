import React, { useEffect, useState } from 'react';
import './Home.css';
import SingelCard from '../SingelCard/SingelCard'
import 'bootstrap/dist/css/bootstrap.css';


const Home = () => {
    const [details, setDetails] = useState([])


    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then((data) => setDetails(data))
    }, []);


        return (
            <div>
                <div className="card-container">

                    {details.map((detail) => (<SingelCard detail={detail}></SingelCard>))};
                  
                </div>
            </div>
        );
    };
export default Home;