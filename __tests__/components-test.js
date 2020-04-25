import React from 'react';
import renderer from 'react-test-renderer';
import MovieCard from '../src/components/MovieCard';
import App from '../App';

// global.fetch = jest.fn(() => new Promise(resolve => resolve()));
// jest.mock('react-native-gesture-handler', () => {});

describe('Component tests', () => {
  describe('App Test', () => {
    it('should match to snapShot', () => {
      const tree = renderer.create(<App />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe('Movie Card Test', () => {
    const movie = {
      id: 1212,
      original_language: 'en',
      original_title: 'dummy',
      overview: 121,
      release_date: 112,
      title: 'dummy',
      vote_average: 1212,
      adult: false,
      backdrop_path: '',
      genre_ids: [121, 22],
      popularity: 4.3,
      poster_path: 'fjfjd',
      video: false,
      vote_count: 121,
    };
    it('should match to snapShot', () => {
      const tree = renderer.create(<MovieCard movie={movie} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
