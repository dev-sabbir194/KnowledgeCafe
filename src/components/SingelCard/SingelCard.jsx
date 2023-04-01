import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const SingelCard = ({ detail }) => {
   
  

    return (
         <div className="card">
                        <div className="blog-cover">
                            <img className='w-100' src={detail.CoverImage} alt="CoverImage" />
                        </div>
                        <div className='profile-bookmark d-flex'>
                             <div className='profile '>
                            <img className='profile-img' src={detail.authorImage} alt="" />
                                
                            <div>
                                <h3>{detail.authorName}</h3>
                                <p>{detail.publishDate}</p>
                            </div>
                            </div>
                            
                            <div className='d-flex gap-2 mt-2'><p>{detail.readTime}</p>
                                <p ><FontAwesomeIcon className='icon' icon={faBookmark} /></p>
                            </div>
                       </div>
                        <div className="markas-read">
                         <h3>{detail.blogTitle}</h3>
                            <p >{detail.hasTag}</p>
                            <a href="#">{detail.markAsRead}</a>
                            
                        </div>
                    </div>
    );
};

export default SingelCard;