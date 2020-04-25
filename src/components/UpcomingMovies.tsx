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

const UpcomingMovies: React.FC = () => {
  const {loading, error, movies} = useSelector(selectState);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');

  const navigation = useNavigation();

  useEffect(() => {
    dispatch(fetchUpcomingMovies(page));
  }, [dispatch, page]);

  const handlePress = (movie: Movie): void => {
    dispatch(fetchMovieDetails(movie.id));
    navigation.navigate('MovieDetails');
  };

  const handleOnReachedEnd = (): void => {
    const _page = page + 1;
    setPage(_page);
  };

  const handleChange = (txt: string) => setSearch(txt);

  if (loading) {
    return (
      <View
        style={{
          ...styles.container,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (error) {
    return (
      <View
        style={{
          ...styles.container,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.wrapper}>
          <Icon name="search" size={20} />
          <TextInput
            style={styles.inputText}
            placeholder="Search"
            value={search}
            onChangeText={handleChange}
          />
        </View>
      </View>
      <FlatList<Movie>
        data={movies.filter(movie =>
          movie.title.toLowerCase().match(search.toLowerCase()),
        )}
        numColumns={2}
        renderItem={({item}) => (
          <MovieCard movie={item} handlePress={(): void => handlePress(item)} />
        )}
        keyExtractor={item => item.id.toString()}
        onEndReachedThreshold={0.5}
        onEndReached={handleOnReachedEnd}
      />
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
