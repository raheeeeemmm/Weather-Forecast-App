import { View, Text, ImageBackground } from 'react-native'
import React, { useEffect, useState } from 'react'
import { deviceHeight, deviceWidth } from './Dimensions';
export default function Details({ route }) {
  const { weather } = route.params;
  return (
    <View style={{
      flex: 1,
    }}>
      <ImageBackground
        source={require('../assets/downloadedimages/img1.jpg')}
        style={{ height: deviceHeight, width: deviceWidth }}
        imageStyle={{ opacity: 0.6, backgroundColor: 'black' }}
      />
      <View style={{
        position: 'absolute',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        width: '100%',
        height: '100%',
      }}>
        <View style={{
          alignItems: 'center'
        }}>
          <Text style={{
            fontSize: 36,
            marginBottom: 16,
            color : 'white',
          }}>Weather Details</Text>
          <Text style={{
            fontSize: 24,
            marginBottom: 16,
            color : 'white',
          }}>{weather.name}</Text>
          <View style={{
            marginTop: 16,
            alignItems: 'center'
          }}>
            <Text style={{
              fontSize: 18,
              marginVertical: 4,
              color:'white',
            }}>Temperature : {weather.main.temp} Farhenheit</Text>
            <Text style={{
              fontSize: 18,
              marginVertical: 4,
              color:'white',
            }}>Humidity : {weather.main.humidity}%</Text>
            <Text style={{
              fontSize: 18,
              marginVertical: 4,
              color:'white',
            }}>Maximum Temperature : {weather.main.temp_max} Farhenheit</Text>
            <Text style={{
              fontSize: 18,
              marginVertical: 4,
              color:'white',
            }}>Minimum Temperature : {weather.main.temp_min} Farhenheit</Text>
            <Text style={{
              fontSize: 18,
              marginVertical: 4,
              color:'white',
            }}>Pressure : {weather.main.pressure}%</Text>
            <Text style={{
              fontSize: 18,
              marginVertical: 4,
              color:'white',
            }}>Wind Speed: {weather.wind.speed} km/h</Text>
          </View>
        </View>
      </View>
    </View>
  )
}