import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { SearchResult } from 'src/app/models/search-result.model';
import { SearchActionTypes, SearchCustomerActionTypes } from './search.actions';


export interface State {
  result: SearchResult[];
}

export const initialState: State = {
  result: []
};

export function reducer(state = initialState, action: SearchActionTypes): State {
  switch (action.type) {

    case SearchCustomerActionTypes.SetSearchCustomerResult:
      return {
        ...state,
        result: action.payload.customers
      };

    default:
      return state;
  }
}
