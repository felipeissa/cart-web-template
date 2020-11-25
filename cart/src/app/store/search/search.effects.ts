import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { SearchCustomer, SetSearchCustomerResult, SearchCustomerActionTypes, SearchActionTypes } from './search.actions';

@Injectable()
export class SearchEffect {

  id = 1;
  @Effect()
  search$ = this.actions$.pipe(
    ofType(SearchCustomerActionTypes.SearchCustomer),
    map((action: SearchCustomer) => {
      return new SetSearchCustomerResult({ customers: [
        {
          id: `${this.id++}`
        }
      ]});
    })
  );

  constructor(
    readonly actions$: Actions < SearchActionTypes > ,
    readonly store: Store < any > ,
  ) { }

}
