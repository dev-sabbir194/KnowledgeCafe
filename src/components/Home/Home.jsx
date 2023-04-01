import React, { useEffect, useState } from 'react';
import './Home.css';
import SingelCard from '../SingelCard/SingelCard';
import Bookmark from '../Bookmark/Bookmark';
import 'bootstrap/dist/css/bootstrap.css';

const Home = () => {
    const [details, setDetails] = useState([]);
    const [bookMark, setbookMark] = useState([]);
    const [blogTitle, setblogTitle] = useState([]);
    const [watchTime, setWatchTime]=useState(0);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then((data) => setDetails(data))
    }, []);


  const handelAddToBookMark = (detail) => {
    const newBookMark = [...bookMark, detail];
    setbookMark(newBookMark);
    setblogTitle(detail);
}

                const handleWatchTime = (time) => {
                setWatchTime( watchTime + time);
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
                        <h3>Spent time on read :{watchTime} min </h3>
                             </div>
                        </div>

                <div>
                 <h2>Bookmarked Blogs : {bookMark.length}</h2>
                 {bookMark.map((bookmark) => (
                        <div class="card mt-3">
                            <div class="card-body">
                            {blogTitle && <h3>{blogTitle}</h3>}
                            </div>
                        </div>
                        ))}                        
                </div>
        </div>

        
        </div>
    );
};

export default Home;
