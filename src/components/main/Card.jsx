import React from 'react'

const Card = (props) => {
    console.log(props);
    const {title,date,image,desc} = props;
  return (
    <div className='cards'>
        <div className="title">
            <h1>{title}</h1>
        </div>
        <div className="date">
            <h2>{date}</h2>
        </div>
        <img src={image} alt="" />
        <div className="card-over">
            <p>{desc}</p>
        </div>
    </div>
  )
}

export default Card