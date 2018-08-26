import moxios from 'moxios';
import { setSearchTerm, addApiData, getApiDetails } from '../actionCreators';

const breakingBad = {
  title: 'Breaking Bad',
  year: '2008–2013',
  description: "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future.",
  poster: 'bb.jpg',
  imdbID: 'tt0903747',
  trailer: 'XZ8daibM3AE',
  rating: '8.2',
};

test('setSearchTerm', () => {
  expect(setSearchTerm('New York')).toMatchSnapshot();
});

test('addApiData', () => {
  expect(addApiData(breakingBad)).toMatchSnapshot();
});

// Async test
test('getApiDetails - success', done => {
  const dispatchMock = jest.fn();
  moxios.withMock(() => {
    getApiDetails(breakingBad.imdbID)(dispatchMock);
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request
        .respondWith({
          status: 200,
          response: breakingBad,
        })
        .then(() => {
          expect(request.url).toEqual(`http://localhost:3001/${breakingBad.imdbID}`);
          expect(dispatchMock).toBeCalledWith(addApiData(breakingBad));
          done();
        });
    });
  });
});
