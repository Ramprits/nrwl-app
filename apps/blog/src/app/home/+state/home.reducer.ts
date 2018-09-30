import { HomeAction, HomeActionTypes } from './home.actions';

/**
 * Interface for the 'Home' data used in
 *  - HomeState, and
 *  - homeReducer
 *
 *  Note: replace if already defined in another module
 */

/* tslint:disable:no-empty-interface */
export interface Entity {
};

export interface HomeState {
  list        : Entity[];             // list of Home; analogous to a sql normalized table
  selectedId ?: string | number;      // which Home record has been selected
  loaded      : boolean;              // has the Home list been loaded
  error      ?: any;                  // last none error (if any)
};

export const initialState: HomeState = {
  list : [ ],
  loaded : false
};

export function homeReducer(
  state: HomeState = initialState, 
  action: HomeAction): HomeState
{
  switch (action.type) {
    case HomeActionTypes.HomeLoaded: {
      state = {
        ...state,
        list  : action.payload,
        loaded: true
      };
      break;
    }
  }
  return state;
}
