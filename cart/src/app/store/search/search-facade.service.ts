import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SearchResult } from 'src/app/models/search-result.model';
import { SearchCustomer } from './search.actions';
import { getSearchResult } from './search.selectors';

@Injectable()
export class SearchFacadeService {

  constructor(
    readonly store: Store<any>
  ) { }

  searchCustomer(searchKey: string): void {
    this.store.dispatch(new SearchCustomer({ searchKey }));
  }

  getSearchResults(): Observable<SearchResult[]> {
    return this.store.select(getSearchResult);
  }

}
