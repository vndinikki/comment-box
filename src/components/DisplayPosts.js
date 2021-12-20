import React, { useState } from 'react';
import './../style.css';

const DisplayPosts = ({ data }) => {
  const { author, replies, text } = data;
  const [click, setClick] = useState(true);

  return (
    <div className={'div'}>
      {!click && (
        <img
          src="https://cdn.iconscout.com/icon/free/png-256/expand-1485690-1258911.png"
          className={'buttonImage'}
          onClick={() => setClick(!click)}
        />
      )}
      <img className={'imageStyle'} src={author.avatar} />
      <span className={'textStyle'}>{author.name}</span>
      {click && (
        <div>
          <div className={'nestedDiv'} onClick={() => setClick(false)}></div>
          <div>
            <p className={'textStyle'}> {text}</p>
            {replies &&
              replies.map((post) => {
                return <DisplayPosts data={post} />;
              })}
          </div>
        </div>
      )}
    </div>
  );
};

export default DisplayPosts;
