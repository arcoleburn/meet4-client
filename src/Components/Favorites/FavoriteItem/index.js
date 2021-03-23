import {Wrapper} from './FavoriteItem.styles'


const favItem = (props) => {
  return (
    <Wrapper>
      <div className="img-holder">
      <img src={props.data.img_url} alt="restaurant" />
      </div>
      <p>{props.data.restaurant_name}</p>
    </Wrapper>
  );
};

export default favItem;
