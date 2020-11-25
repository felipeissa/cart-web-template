import { Action } from '@ngrx/store';
import { SearchResult } from '../../models/search-result.model';

export enum SearchCustomerActionTypes {
  SearchCustomer = '[SearchCustomer] Search customer',
  SetSearchCustomerResult = '[SearchCustomer] Set search customer result'
}

export class SearchCustomer implements Action {
  readonly type = SearchCustomerActionTypes.SearchCustomer;

  constructor(public payload: { searchKey: string } ) { }
}

export class SetSearchCustomerResult implements Action {
  readonly type = SearchCustomerActionTypes.SetSearchCustomerResult;

  constructor(public payload: { customers: SearchResult[] } ) { }
}


export type SearchActionTypes = SearchCustomer
  | SetSearchCustomerResult;
