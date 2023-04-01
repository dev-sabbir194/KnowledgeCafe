import React, { useEffect, useState } from 'react';
import './Home.css';
import SingelCard from '../SingelCard/SingelCard';
import 'bootstrap/dist/css/bootstrap.css';

const Home = () => {
  const [details, setDetails] = useState([]);
  const [bookMark, setbookMark] = useState([]);
  const [blogTitle, setblogTitle] = useState([]);
  const [watchTime, setWatchTime] = useState(0);

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

 
 const handleWatchTime = (time)=>{
          setWatchTime(watchTime +  time)
    }

  return (
    <div className='d-flex flex-wrap'>
      <div className="card-container col-lg-8">
        {details.map((detail) => (
          <SingelCard
            key={detail.id}
            detail={detail}
            handelAddToBookMark={handelAddToBookMark}
            handleWatchTime={handleWatchTime}
          />

        ))}
      </div>


      <div className="bookMark container-fluid col-lg-4 mt-3 mt-lg-0">
        <div className="card" id='time-count'>
          <div className="card-body">
             <h3 className='timecount'>Spent time on read:{watchTime}</h3>
          </div>
        </div>

        <div>
          <h2>Bookmarked Blogs: {bookMark.length}</h2>
          {bookMark.map((bookmark) => (
            <div className="card mt-3">
              <div className="card-body">
                {blogTitle && <h3>{blogTitle}</h3>}
              </div>
            </div>
          ))}
        </div>
          </div>
          
  <div className="container-fluid col-lg-12 mt-3">
        <h2>More Blogs</h2>
        <div className="row">
          {details.slice(0, 4).map((detail) => (
            <div className="col-lg-3 mb-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{detail.question}</h5>
                  <p className="card-text">{detail.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Home;
