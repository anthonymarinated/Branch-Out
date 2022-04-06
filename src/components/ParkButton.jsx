import React from 'react';
import { Link } from 'react-router-dom';

// const prospect = park;
function ParkButton(props) {
  return (
    <div
      style={{
        border: '1px solid rgba(0, 0, 0, 0.13)',
        borderRadius: '5px',
        marginTop: '5px',
        paddingTop: '10px',
        backgroundColor: 'rgb(241, 187, 198)',
      }}
    >
        <img
          src={props.image}
          alt='park'
          style={{ height: '450px', width: '500px' }}
        />
      <Link to={'/park/' + props.parkName.split(' ').join('-')}>
        <h3
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '10px',
          }}
        >
          {props.parkName}
        </h3>
      </Link>
    </div>
  );
}

export default ParkButton;
