import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MatInputModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchEffect } from './store/search/search.effects';
import { SearchFacadeService } from './store/search/search-facade.service';
import { reducer as SearchReducer } from './store/search/search.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({ search: SearchReducer}, {}),
    EffectsModule.forRoot([
      SearchEffect
    ])
  ],
  providers: [
    SearchFacadeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
