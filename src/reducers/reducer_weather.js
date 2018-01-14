import {FETCH_WEATHER}  from '../actions/index';

export default function(state = [], action) {
  console.log('State received', state);
  switch (action.type) {
    case FETCH_WEATHER:
      // never mutate the original state objet!!
      return [ action.payload.data, ...state] // == return state.concat([ action.payload.data ]);
  }

  return state;
}