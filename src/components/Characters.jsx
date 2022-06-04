import React, { useState, useEffect, useReducer } from 'react';

const initialState = {
  favorites: []
}

const favoriteReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_FAVORITE':
      return {
        ...state,
        favorites: [...state.favorites, action.payload]
      };
    default:
      return state;
  }
}

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [favorites, dispatch] = useReducer(favoriteReducer, initialState);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/')
      .then(response => response.json())
      .then(data => setCharacters(data.results));
  }, []);

  const handleClick = favorite => {
    dispatch({ type: 'ADD_TO_FAVORITE', payload: favorite })
  }

  return (

    <div className="Characters">

      <ul className="main-favorites">
        <li className='blue'>Favorites</li>
        {favorites.favorites.map(favorite => (
          <li key={favorite.id}>
            {favorite.name}
          </li>
        ))}
      </ul>

      {characters.map(character => (
        <div className="Character">
          <img src={character.image} alt="Image" />
          <div className="info">
            <div className="item" key={character.id}>
              <h2> <span className='blue'>Name: </span>  {character.name}</h2>
              <h2> <span className='blue'>Species: </span>  {character.species}</h2>
              <h2> <span className='blue'>Origin: </span>  {character.origin.name}</h2>
              <button type="button" onClick={() => handleClick(character)}>Agregar a Favoritos</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Characters;
