import {
  View,
  Text,
  Image,
  StatusBar,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import Colors from '../../assets/styles/Colors';
import Icon from 'react-native-vector-icons/Ionicons';
import { ScrollView } from 'react-native-gesture-handler';
import { HomeStyle } from '../../assets/styles/HomeStyle';
import { useDispatch, useSelector } from 'react-redux';
import { getEventData } from './redux/action';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = ({ navigation }: { navigation: any }) => {
  const dispatch = useDispatch();

  const userData = useSelector(state => state.auth.loginData);
  const eventData = useSelector(state => state.home.eventData.data?.events || []);

  const [wishlistIndexes, setWishlistIndexes] = useState<number[]>([]);

  useEffect(() => {
    dispatch(getEventData(navigation));
  }, []);

    // useEffect(() => {
    //   const unsubscribe = navigation.addListener('focus', () => {
    // dispatch(getEventData(navigation));
    //   });
    //   return unsubscribe;
    // }, [navigation]);

  const toggleWishlist = async (eventItem: any, index: number) => {
  let updated;

  if (wishlistIndexes.includes(index)) {
    updated = wishlistIndexes.filter(id => id !== index);
    setWishlistIndexes(updated);
    const storedData = await AsyncStorage.getItem('favoriteEvents');
    let favorites = storedData ? JSON.parse(storedData) : [];

    favorites = favorites.filter((item: any) => item.event_id !== eventItem.event_id);
    await AsyncStorage.setItem('favoriteEvents', JSON.stringify(favorites));
  } else {
    updated = [...wishlistIndexes, index];
    setWishlistIndexes(updated);
    const storedData = await AsyncStorage.getItem('favoriteEvents');
    let favorites = storedData ? JSON.parse(storedData) : [];
    favorites.push(eventItem);
    await AsyncStorage.setItem('favoriteEvents', JSON.stringify(favorites));
  }
  console.log("✅ Updated indexes =>", updated);
};


  const ListEmpty = () => (
    <View style={{ alignItems: 'center', marginTop: 20 }}>
      <Text>No events available</Text>
    </View>
  );

  const renderEventList = (eventItem: any, index: number) => {
    const isFavorite = wishlistIndexes.includes(index);

    return (
      <View style={HomeStyle.listContainer}>
        <View style={HomeStyle.flexRow}>
          <View style={HomeStyle.flexRow}>
            <Image
              source={{ uri: eventItem?.event_profile_img }}
              style={HomeStyle.profileImg}
            />
            <View style={HomeStyle.titleContainer}>
              <Text style={HomeStyle.eventName}>{eventItem?.event_name}</Text>
              <Text style={HomeStyle.eventDate}>{eventItem?.readable_from_date}</Text>
              <Text style={HomeStyle.eventPrice}>
                {eventItem?.event_price_from} - {eventItem?.event_price_to}
              </Text>

              <FlatList
                nestedScrollEnabled
                data={eventItem.danceStyles}
                horizontal
                keyExtractor={(item, idx) => idx.toString()}
                renderItem={({ item, index }) => renderDanceStyle(item, index)}
                showsHorizontalScrollIndicator={false}
              />
            </View>
          </View>

          <View style={HomeStyle.sideContainer}>
            <View>
              <Icon
                style={HomeStyle.flexEnd}
                name="arrow-forward-sharp"
                size={18}
                color={Colors.black}
              />
              <Text style={HomeStyle.eventCity}>
                {eventItem.city}, {eventItem.country}
              </Text>
            </View>

            <View style={HomeStyle.iconContainer}>
              <Icon name="cloud-upload-outline" size={18} color={Colors.black} />
              <TouchableOpacity onPress={() => toggleWishlist(eventItem,index)}>
                <View style={{ marginLeft: 10 }}>
                  <Icon
                    name={isFavorite ? 'heart' : 'heart-outline'}
                    size={20}
                    color={isFavorite ? Colors.red : Colors.black}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  };

  const renderDanceStyle = (danceData: any, index: number) => (
    <View key={index} style={{ paddingTop: '8%' }}>
      <View style={HomeStyle.typeContainer}>
        <Text style={HomeStyle.danceText}>{danceData?.ds_name}</Text>
      </View>
    </View>
  );

  return (
    <View style={HomeStyle.mainContainer}>
      <StatusBar
        barStyle={'dark-content'}
        animated={true}
        backgroundColor={Colors.white}
      />
      <View style={HomeStyle.container}>
        <Text style={HomeStyle.titleName}>
          Hello {userData?.data?.user?.usr_fname}!
        </Text>
        <Text style={HomeStyle.subTitle}>Are you ready to dance?</Text>
      </View>

      <ScrollView style={[HomeStyle.BGColor, { flex: 1 }]}>
        <FlatList
          data={eventData}
          ListEmptyComponent={ListEmpty}
          keyExtractor={(item, index) => index.toString()} // using index as key
          renderItem={({ item, index }) => renderEventList(item, index)}
          showsVerticalScrollIndicator={false}
        />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
