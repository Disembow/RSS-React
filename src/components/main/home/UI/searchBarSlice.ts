import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { TAlbums } from '../../../../types/props-types';
import { ALBUMS_PER_PAGE, API_CATALOG, API_LINK } from '../../../utils/data';

type TInitialState = {
  input: string;
  albums: TAlbums[];
  albumsCount: number;
  currentPage: number;
  albumsPerPage: number;
  isLoading: boolean;
  error: string;
};

const initialState: TInitialState = {
  input: '',
  albums: [],
  albumsCount: 0,
  currentPage: 1,
  albumsPerPage: ALBUMS_PER_PAGE,
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
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setAlbumsPerPage: (state, action) => {
      state.albumsPerPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAlbums.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAlbums.fulfilled, (state, action) => {
        state.isLoading = false;
        const [data, count] = action.payload;
        state.albums = data;
        state.albumsCount = count;
        state.error = '';
      })
      .addCase(fetchAlbums.rejected, (state) => {
        state.isLoading = false;
        state.albums = [];
        state.error = "Couldn't fetch the data from that source";
      });
  },
});

export const fetchAlbums = createAsyncThunk<[TAlbums[], number], [string, number, number]>(
  'searchbar/fetchAlbums',
  async ([search, page, albumsPerPage], { rejectWithValue }) => {
    if (!search || search === '') {
      const response = await fetch(
        API_LINK + API_CATALOG + `?_limit=${albumsPerPage}&_page=${page}`
      );

      if (!response.ok) {
        return rejectWithValue("Couldn't fetch the data from that source");
      }

      const albumCount = Number(response.headers.get('X-Total-Count'));
      const data: TAlbums[] = await response.json();
      return [data, albumCount];
    } else {
      const response = await fetch(API_LINK + API_CATALOG);

      if (!response.ok) {
        return rejectWithValue("Couldn't fetch the data from that source");
      }

      const data = await response.json();
      const result: TAlbums[] = data.filter((album: TAlbums) => {
        return (
          album &&
          (album.artist.toLowerCase().includes(search.toLowerCase()) ||
            album.album.toLowerCase().includes(search.toLowerCase()) ||
            album.genre.toLowerCase().includes(search.toLowerCase()) ||
            album.country.toLowerCase().includes(search.toLowerCase()) ||
            album.year.toString().includes(search))
        );
      });

      return [result, result.length];
    }
  }
);

export default searchBarSlice.reducer;
export const { submitSearch, setCurrentPage, setAlbumsPerPage } = searchBarSlice.actions;
