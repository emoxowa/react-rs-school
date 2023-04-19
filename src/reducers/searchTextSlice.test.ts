// tests/searchTextSlice.spec.js
import { createSlice } from '@reduxjs/toolkit';
import searchTextSlice, { setSearchText } from './searchTextSlice';

describe('searchTextSlice', () => {
  test('should return the initial state', () => {
    const slice = createSlice({
      name: 'searchText',
      initialState: { value: '' },
      reducers: {
        setSearchText: (state, action) => {
          state.value = action.payload;
        },
      },
    });

    expect(
      searchTextSlice(undefined, {
        type: undefined,
      })
    ).toEqual(
      slice.reducer(undefined, {
        type: undefined,
      })
    );
  });

  test('should handle setSearchText', () => {
    const testText = 'test';
    const state = { value: '' };
    const action = {
      type: setSearchText.type,
      payload: testText,
    };

    expect(searchTextSlice(state, action)).toEqual({ value: testText });
  });
});
