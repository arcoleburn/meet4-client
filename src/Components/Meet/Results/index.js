import React, { useEffect, useState } from 'react';
import Map from '../Map';
import Meet4ApiService from '../../../Services/meet4ApiService';

const Results = (props) => {
  const [resNum, setResNum] = useState(0);
  const [loading, setLoading] = useState(true);
  const [businesses, setBusinesses] = useState([]);
  const [selected, setSelected] = useState(false);

  const { category, addressA, addressB } = props;



  useEffect(() => {
    Meet4ApiService.getBusinesses(addressA, addressB, category).then(
      (res) => {
        setBusinesses(res.businesses);
        setLoading(false);
      }
    );
  }, [addressA, addressB, category]);

  return (
    <>
      {loading ? (
        <p>loading...</p>
      ) : !selected ? (
        <>
          <h3>Our Pick</h3>
          <h2>{businesses[resNum].name}</h2>
          <img src={businesses[resNum].image_url} alt="resturant" />
          <p>
            Address: {businesses[resNum].location.display_address}
          </p>
          <p>Phone: {businesses[resNum].display_phone}</p>
          <a href={businesses[resNum].url} target="_blank" rel="noreferrer">
            View on Yelp
          </a>
          <button
            onClick={() => {
              resNum < businesses.length - 1
                ? setResNum(resNum + 1)
                : setResNum(0);
            }}
          >
            Nah...
          </button>
          <button onClick={()=>setSelected(true)}>Sound's good!</button>
        </>
      ) : <Map history={props.history} business={businesses[resNum]} data = {props.data} addressA = {addressA} addressB={addressB}/> }
    </>
  );
};

export default Results;
