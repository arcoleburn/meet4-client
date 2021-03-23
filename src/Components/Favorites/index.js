import { useEffect, useState } from 'react';
import Meet4ApiService from '../../Services/meet4ApiService';
import { Spinner } from '../Utils/spinner.styles';
import FavItem from './FavoriteItem';
import {FavoritesGrid, Wrapper} from './Favorites.styles'
const Favorites = (props) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    Meet4ApiService.getFavorites().then((favs) => setFavorites(favs));
  }, []);

  const renderFavs = (favorites) => {
    let favs = [];

    for (let i = 0; i < favorites.length; i++) {
      favs.push(<FavItem data={favorites[i]} />);
      console.log('pushed a fav');
      console.log(favs);
    }
    return <FavoritesGrid>{favs}</FavoritesGrid>;
  };

  return (
    <Wrapper>
      <h3>Favorites</h3>
      {!favorites ? <Spinner /> : <>{renderFavs(favorites)}</>}
    </Wrapper>
  );
};

export default Favorites;
