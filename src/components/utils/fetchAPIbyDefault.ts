import { TAlbums } from '../../types/props-types';

export default function fetchAPI(
  setAlbums: React.Dispatch<React.SetStateAction<TAlbums[]>>,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setError: React.Dispatch<React.SetStateAction<null | string>>,
  search?: string
) {
  setTimeout(() => {
    fetch('http://localhost:3000/catalog')
      .then((res) => {
        if (!res.ok) {
          throw new Error("Couldn't fetch the data from that source");
        }
        return res.json();
      })
      .then((data: TAlbums[]) => {
        if (!search && search !== '') {
          setAlbums(data);
        } else {
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

          if (result.length > 0) {
            setError(null);
            setAlbums(result);
          } else {
            setAlbums([]);
          }
        }

        setError(null);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  }, 1100);
}
