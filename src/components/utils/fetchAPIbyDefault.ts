import { TAlbums } from '../../types/props-types';

export default function fetchAPI(
  setAlbums: React.Dispatch<React.SetStateAction<TAlbums[]>>,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setError: React.Dispatch<React.SetStateAction<null | string>>
) {
  fetch('http://localhost:3000/catalog')
    .then((res) => {
      if (!res.ok) {
        throw new Error("Couldn't fetch the data from that source");
      }
      return res.json();
    })
    .then((data) => {
      setAlbums(data);
      setError(null);
    })
    .catch((error) => {
      setError(error.message);
    })
    .finally(() => setIsLoading((prev: boolean) => !prev));
}
