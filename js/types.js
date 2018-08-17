import { shape, string } from 'prop-types';

const Show = shape({
  title: string,
  description: string,
  year: string,
  imdbID: string.isRequired,
  trailer: string,
  poster: string,
});

export default Show;
