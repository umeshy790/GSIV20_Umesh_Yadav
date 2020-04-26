import React from 'react';
import {StyleSheet,Image, Text,ScrollView, View, ActivityIndicator} from 'react-native';
import {RootState} from '../store';
import {useSelector} from 'react-redux';
import { formateDate } from '../utils';

const selectState = (state: RootState) => state.movieDetailReducer;

/**
 * no director name and actors name in detail json response so i just dummy them .
 */

const MovieDetails = () => {
  const { error, loading, movie } = useSelector(selectState);

  if(loading) {
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
  
  if (!movie) {
    return null
  }

  return (
    <View style={styles.container}>
      <View style={{flex : 1}}>
        <Image style={styles.image}
             source={{
              uri: `http://image.tmdb.org/t/p/original${movie?.poster_path}`
            }}></Image>
      </View>
      <ScrollView style={{flex : 1, paddingTop : 10}}>
        <View style={{ flexDirection: 'row', alignItems : 'center' }}>
          <Text style={styles.title}>{movie.title}</Text>
          <Text style={styles.popularity}>({movie.vote_average})</Text>
        </View>
        
        <View style={{paddingTop : 15}}>
          <Text style={styles.description}>{movie.release_date} | {formateDate(movie.runtime)}</Text>
          <Text style={styles.description}>Cast : Actor 1 | Actor 2</Text>
          <Text style={{ ...styles.description, paddingTop : 16 }}>{movie.overview}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default MovieDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding : 10
  },
  image: {
    flex : 1,
    height: undefined,
    resizeMode: 'cover'
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    color:"#4a4a4a"
  },
  popularity: {
    fontSize: 16,
    paddingLeft: 5,
    color : '#9b9b9b'
  },
  description: {
    fontSize: 16,
    color:"#4a4a4a"
  }
});
