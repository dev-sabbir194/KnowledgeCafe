import React, { useEffect, useState } from 'react';
import './Home.css';
import SingelCard from '../SingelCard/SingelCard';
import Bookmark from '../Bookmark/Bookmark';
import 'bootstrap/dist/css/bootstrap.css';

const Home = () => {
    const [details, setDetails] = useState([]);
    const [bookMark, setbookMark] = useState([]);
    const [watchTime, setWatchTime]=useState(0);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then((data) => setDetails(data))
    }, []);


    const handelAddToBookMark = (detail) => {
                const newBookMark = [...bookMark, detail];
                setbookMark(newBookMark);
        
    console.log(detail)
}

    const handleWatchTime = (time)=>{
        setWatchTime(watchTime + time)
        console.log(time)
    }
    
    
    
    


    return (
        <div className='d-flex'>
            <div className="card-container">
                {details.map((detail) => (
                   <SingelCard
                    key={detail.id}
                    detail={detail}
                    handelAddToBookMark={handelAddToBookMark}
                    handleWatchTime={handleWatchTime}
                    />
        
                ))}
            </div>

            
        <div className="bookMark container-fluid overflow-hidden col-md-4">
                        <div class="card mt-3" id='time-count'>
                             <div class="card-body">
                        <h3>Spent time on read :{watchTime} </h3>
                             </div>
                        </div>

            <div>
                <div class="card mt-3">
                <div class="card-body">
                    <h2>Bookmarked Blogs : {bookMark.length}</h2>
                        <p></p>
                </div>
            </div>
             </div>
        </div>

        
        </div>
    );
};

export default Home;
