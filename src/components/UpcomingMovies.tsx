/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import {RootState} from '../store';
import {useSelector, useDispatch} from 'react-redux';
import {fetchUpcomingMovies, fetchMovieDetails} from '../action';
import {Movie} from '../modal/modals';
import MovieCard from './MovieCard';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const selectState = (state: RootState) => state.movieListReducer;
let timeOut: any;

const UpcomingMovies: React.FC = () => {
  const {loading, error, movies} = useSelector(selectState);
  const [state, setState] = useState({
    page: 1,
    query: '',
  });
  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    const {page, query} = state;
    /**
     * can be improvise but bear with me .
     */
    if (timeOut) {
      clearTimeout(timeOut);
    }
    if (!query) {
      dispatch(fetchUpcomingMovies(page, query));
    } else {
      timeOut = setTimeout(() => {
        dispatch(fetchUpcomingMovies(page, query));
      }, 500);
    }
  }, [dispatch, state]);

  const handlePress = (movie: Movie): void => {
    dispatch(fetchMovieDetails(movie.id));
    navigation.navigate('MovieDetails');
  };

  const handleOnReachedEnd = (): void => {
    setState({...state, page: state.page + 1});
  };

  const handleChange = (txt: string) => setState({page: 1, query: txt});

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.wrapper}>
          <Icon name="search" size={20} />
          <TextInput
            style={styles.inputText}
            placeholder="Search"
            value={state.query}
            onChangeText={handleChange}
          />
        </View>
      </View>
      <View style={{flex: 1}}>
        {loading ? (
          <View
            style={{
              ...styles.container,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <ActivityIndicator size="large" />
          </View>
        ) : error ? (
          <View
            style={{
              ...styles.container,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text>{error}</Text>
          </View>
        ) : (
          <FlatList<Movie>
            data={movies}
            numColumns={2}
            renderItem={({item}) => (
              <MovieCard movie={item} handlePress={handlePress} />
            )}
            keyExtractor={item => item.id.toString()}
            onEndReachedThreshold={0.8}
            onEndReached={handleOnReachedEnd}
          />
        )}
      </View>
    </View>
  );
};

export default UpcomingMovies;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    height: 52,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#4a4a4a',
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  wrapper: {
    backgroundColor: '#dfdfdf',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    paddingHorizontal: 8,
  },
  inputText: {
    marginLeft: 5,
    flex: 1,
    height: 40,
    color: '#000000',
  },
});
