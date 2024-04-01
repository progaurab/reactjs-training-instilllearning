import React, { useReducer, useContext } from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';

import UserContext from '../User/User';
import { SaladContext } from '../SaladMaker/SaladMaker';

const useStyles = createUseStyles({
  add: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
  },
  favorite: {
    fontSize: 20,
    position: 'absolute',
    top: 10,
    right: 10,
  },
  image: {
    fontSize: 80
  },
  wrapper: {
    border: 'lightgrey solid 1px',
    margin: 20,
    padding: 25,
    position: 'relative',
    textAlign: 'center',
    textTransform: 'capitalize',
    width: 200,
  }
});

const reducer = key => key + 1;

export default function SaladItem({ image, name }) {
    const classes = useStyles();
    const { setSalad } = useContext(SaladContext)
    const user = useContext(UserContext);
    const favorite = user.favorites.includes(name);
    const [id, updateId] = useReducer(reducer, 0);
    function update() {
      setSalad({
        name,
        id: `${name}-${id}`
      })
      updateId();
    };
    return(
      <div className={classes.wrapper}>
          <h3>
            {name}
          </h3>
          <span className={classes.favorite} aria-label={favorite ? 'Favorite' : 'Not Favorite'}>
            {favorite ? '😋' : ''}
          </span>
          <button className={classes.add} onClick={update}>
            <span className={classes.image} role="img" aria-label={name}>{image}</span>
          </button>
      </div>
    )
  }
  
  SaladItem.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }