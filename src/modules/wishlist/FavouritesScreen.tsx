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
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector } from 'react-redux';

const FavouritesScreen = ({ navigation }: { navigation: any }) => {
  const userData = useSelector((state: any) => state.auth.loginData);
  const [wishlist, setWishlist] = useState<any[]>([]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      loadWishlist();
    });
    return unsubscribe;
  }, [navigation]);

  const loadWishlist = async () => {
    try {
      const data = await AsyncStorage.getItem('favoriteEvents');
      if (data) {
        setWishlist(JSON.parse(data));
      } else {
        setWishlist([]);
      }
    } catch (err) {
      console.log('Failed to load wishlist', err);
    }
  };

  const removeFromWishlist = async (eventId: any) => {
    const updated = wishlist.filter(item => item.event_id !== eventId);
    setWishlist(updated);
    await AsyncStorage.setItem('favoriteEvents', JSON.stringify(updated));
  };

  const ListEmpty = () => (
    <View style={{ alignItems: 'center', marginTop: 20 }}>
      <Text>No favorite events yet</Text>
    </View>
  );

  const renderDanceStyle = (danceData: any, index: number) => (
    <View key={index} style={{ paddingTop: '8%' }}>
      <View style={HomeStyle.typeContainer}>
        <Text style={HomeStyle.danceText}>{danceData?.ds_name}</Text>
      </View>
    </View>
  );

  const renderEventItem = ({ item, index }: { item: any; index: number }) => {
    return (
      <View key={index} style={HomeStyle.listContainer}>
        <View style={HomeStyle.flexRow}>
          <View style={HomeStyle.flexRow}>
            <Image
              source={{ uri: item?.event_profile_img }}
              style={HomeStyle.profileImg}
            />
            <View style={HomeStyle.titleContainer}>
              <Text style={HomeStyle.eventName}>{item?.event_name}</Text>
              <Text style={HomeStyle.eventDate}>{item?.readable_from_date}</Text>
              <Text style={HomeStyle.eventPrice}>
                {item?.event_price_from} - {item?.event_price_to}
              </Text>

              <FlatList
                nestedScrollEnabled
                data={item.danceStyles}
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
                {item.city}, {item.country}
              </Text>
            </View>

            <View style={HomeStyle.iconContainer}>
              <Icon name="cloud-upload-outline" size={18} color={Colors.black} />
              <TouchableOpacity onPress={() => removeFromWishlist(item.event_id)}>
                <View style={{ marginLeft: 10 }}>
                  <Icon name="heart" size={20} color={Colors.red} />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  };

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
        <Text style={HomeStyle.subTitle}>Here are your favorite events</Text>
      </View>

      <ScrollView style={[HomeStyle.BGColor, { flex: 1 }]}>
        <FlatList
          data={wishlist}
          ListEmptyComponent={ListEmpty}
          keyExtractor={(item, index) => (item.event_id ?? index).toString()}
          renderItem={renderEventItem}
          showsVerticalScrollIndicator={false}
        />
      </ScrollView>
    </View>
  );
};

export default FavouritesScreen;
