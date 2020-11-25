import { Component, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { SearchResult } from './models/search-result.model';
import { SearchFacadeService } from './store/search/search-facade.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy, OnInit {

  searchKey: string;
  destroyed: EventEmitter<void> = new EventEmitter();
  searchResult: SearchResult[];

  constructor(
    private readonly searchService: SearchFacadeService
  ) {}

  ngOnInit() {
    this.listenSearchResults();
  }

  ngOnDestroy() {
    this.destroyed.emit();
  }

  onChange() {
    this.searchService.searchCustomer(this.searchKey);
  }

  private listenSearchResults() {
    this.searchService.getSearchResults()
      .pipe(takeUntil(this.destroyed))
      .subscribe(data => this.searchResult = data);
  }
}
