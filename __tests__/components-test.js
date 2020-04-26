import React from 'react';
import renderer from 'react-test-renderer';
import MovieCard from '../src/components/MovieCard';
import MovieDetails from '../src/components/MovieDetails';
import configureMockStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

const mockStore = configureMockStore([thunk]);

describe('Component tests', () => {
  // describe('App Test', () => {
  //   it('should match to snapShot', () => {
  //     const tree = renderer.create(<App />).toJSON();
  //     expect(tree).toMatchSnapshot();
  //   });
  // });

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

  describe('should match to snapshot', () => {
    const store = mockStore({
      movieDetailReducer: {
        error: null,
        loadiing: false,
        movie: {},
      },
    });
    const tree = renderer
      .create(
        <Provider store={store}>
          <MovieDetails />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchInlineSnapshot(`
      <View
        style={
          Object {
            "backgroundColor": "#ffffff",
            "flex": 1,
            "padding": 10,
          }
        }
      >
        <View
          style={
            Object {
              "flex": 1,
            }
          }
        >
          <Image
            source={
              Object {
                "uri": "http://image.tmdb.org/t/p/originalundefined",
              }
            }
            style={
              Object {
                "flex": 1,
                "height": undefined,
                "resizeMode": "cover",
              }
            }
          />
        </View>
        <RCTScrollView
          style={
            Object {
              "flex": 1,
              "paddingTop": 10,
            }
          }
        >
          <View>
            <View
              style={
                Object {
                  "alignItems": "center",
                  "flexDirection": "row",
                }
              }
            >
              <Text
                style={
                  Object {
                    "color": "#4a4a4a",
                    "fontSize": 18,
                    "fontWeight": "500",
                  }
                }
              />
              <Text
                style={
                  Object {
                    "color": "#9b9b9b",
                    "fontSize": 16,
                    "paddingLeft": 5,
                  }
                }
              >
                (
                )
              </Text>
            </View>
            <View
              style={
                Object {
                  "paddingTop": 15,
                }
              }
            >
              <Text
                style={
                  Object {
                    "color": "#4a4a4a",
                    "fontSize": 16,
                  }
                }
              >
                 | 
                NaN:NaN
              </Text>
              <Text
                style={
                  Object {
                    "color": "#4a4a4a",
                    "fontSize": 16,
                  }
                }
              >
                Cast : Actor 1 | Actor 2
              </Text>
              <Text
                style={
                  Object {
                    "color": "#4a4a4a",
                    "fontSize": 16,
                    "paddingTop": 16,
                  }
                }
              />
            </View>
          </View>
        </RCTScrollView>
      </View>
    `);
  });
});
