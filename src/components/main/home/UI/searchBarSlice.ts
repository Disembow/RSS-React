import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { TAlbums } from '../../../../types/props-types';
import { API_CATALOG, API_LINK } from '../../../utils/data';

// import * as toolkitRaw from '@reduxjs/toolkit';
// const { createSlice, createAsyncThunk } = ((toolkitRaw as any).default ??
// toolkitRaw) as typeof toolkitRaw;

type TInitialState = {
  input: string;
  albums: TAlbums[];
  isLoading: boolean;
  error: string;
};

const initialState: TInitialState = {
  input: '',
  albums: [],
  isLoading: false,
  error: '',
};

const searchBarSlice = createSlice({
  name: 'searchbar',
  initialState,
  reducers: {
    submitSearch: (state, action) => {
      state.input = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAlbums.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAlbums.fulfilled, (state, action) => {
        state.isLoading = false;
        state.albums = action.payload;
        state.error = '';
      })
      .addCase(fetchAlbums.rejected, (state) => {
        state.isLoading = false;
        state.albums = [];
        state.error = "Couldn't fetch the data from that source";
      });
  },
});

export const fetchAlbums = createAsyncThunk<TAlbums[], string>(
  'searchbar/fetchAlbums',
  async (search, { rejectWithValue }) => {
    const response = await fetch(API_LINK + API_CATALOG);

    if (!response.ok) {
      return rejectWithValue("Couldn't fetch the data from that source");
    }

    const data = await response.json();

    if (!search || search === '') return data;

    return data.filter((album: TAlbums) => {
      return (
        album &&
        (album.artist.toLowerCase().includes(search.toLowerCase()) ||
          album.album.toLowerCase().includes(search.toLowerCase()) ||
          album.genre.toLowerCase().includes(search.toLowerCase()) ||
          album.country.toLowerCase().includes(search.toLowerCase()) ||
          album.year.toString().includes(search))
      );
    });
  }
);

export default searchBarSlice.reducer;
export const { submitSearch } = searchBarSlice.actions;
