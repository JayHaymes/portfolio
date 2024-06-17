import React from 'react';
import './MyWork.css';
import mywork_data from '../../assets/mywork_data';

const MyWork = () => {
  return (
    <div id='work' className='mywork'>
      <div className="mywork-title">
        <h1>My latest work</h1>
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => {
          return (
            <a key={index} href={work.w_url} target="_blank" rel="noopener noreferrer">
              <img src={work.w_img} alt='' />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default MyWork;
