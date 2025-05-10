import {
    View,
    Text,
    ImageBackground,
    TextInput,
    Button,
    ActivityIndicator,
} from 'react-native';
import React, { useState } from 'react';
import { deviceHeight, deviceWidth } from './Dimensions';
import axios from 'axios';
import { API_KEY } from './Constants';


export default function Home({ navigation }) {
    const [city, setCity] = useState('');
    const [load, setLoad] = useState(false)
    let [weather, setWeather] = useState({})
    const fetchweather = async () => {
        setLoad(true);
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`,)
            setWeather(response.data)
            setLoad(false);
            navigation.navigate('Details', { weather : response.data})
        } catch {
            console.error(error);
            setLoad(false);
        }
    }
    console.log(weather);



    return (
        <View>
            <ImageBackground
                source={require('../assets/downloadedimages/img1.jpg')}
                style={{ height: deviceHeight, width: deviceWidth }}
                imageStyle={{ opacity: 0.6, backgroundColor: 'black' }}
            />
            <View
                style={{
                    position: 'absolute',
                    paddingVertical: 20,
                    paddingHorizontal: 10,
                }}>
                <View style={{ paddingHorizontal: 20, marginTop: 100, marginLeft: 70 }}>
                    <Text style={{ fontSize: 40, color: 'white' }}>OpenWeather</Text>
                    <Text style={{ color: 'white', fontSize: 22, fontWeight: 'bold', marginTop: 200 }}>
                        Search the city by the name
                    </Text>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            borderRadius: 50,
                            borderWidth: 1,
                            borderColor: 'white',
                            marginTop: 16,
                            paddingHorizontal: 10,
                            marginTop: 20
                        }}>
                        <TextInput
                            value={city}
                            onChangeText={setCity}
                            placeholder="Search City"
                            placeholderTextColor="white"
                            style={{ paddingHorizontal: 10, color: 'white', fontSize: 16 }}
                        />
                    </View>
                    <View style={{
                        alignItems: 'center',
                        borderRadius: 50,
                        marginTop: 20,
                    }}>
                        <Button title='Get Weather' onPress={fetchweather} />
                        {load && <ActivityIndicator size="large" color="#0000ff" />}
                    </View>
                </View>
            </View>
        </View>
    );
}
