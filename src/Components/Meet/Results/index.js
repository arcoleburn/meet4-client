import React, { useEffect, useState } from 'react';
import Map from '../Map';
import Meet4ApiService from '../../../Services/meet4ApiService';
import Spinner from '../../Utils/Spinner';

import {Wrapper, Content} from './Results.styles'

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
        <Spinner/>
      ) : !selected ? (
        <Wrapper>
          <h3>Results:</h3>
          <Content>
          <h2>{businesses[resNum].name}</h2>
          <img src={businesses[resNum].image_url} alt="resturant" />
          <p>
            Address:
            </p>
            <p>{businesses[resNum].location.display_address}
          </p>
          <p>Phone:</p>
          <p>{businesses[resNum].display_phone}</p>
          <a href={businesses[resNum].url} target="_blank" rel="noreferrer">
            View on Yelp
          </a>
          <div className='controls'>
          <button
            onClick={() => {
              resNum < businesses.length - 1
                ? setResNum(resNum + 1)
                : setResNum(0);
            }}
          >
            Nah...
          </button>
          <button onClick={()=>setSelected(true)}>Yup!</button>
          </div>
          </Content>
        </Wrapper>
      ) : <Map history={props.history} business={businesses[resNum]} data = {props.data} addressA = {addressA} addressB={addressB}/> }
    </>
  );
};

export default Results;
