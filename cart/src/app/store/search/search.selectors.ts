import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from './search.reducer';

const getFeatureState =
  createFeatureSelector<State>('search');

export const getSearchResult = createSelector(
  getFeatureState,
  state => state.result
);
