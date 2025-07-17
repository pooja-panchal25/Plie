import {
  View,
  Text,
  Image,
  StatusBar,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Colors from '../../assets/styles/Colors';
import Icon from 'react-native-vector-icons/Ionicons';
import {ScrollView} from 'react-native-gesture-handler';
import {HomeStyle} from '../../assets/styles/HomeStyle';
import {IMAGE} from '../../assets/styles/Images';
import {useDispatch, useSelector} from 'react-redux';
import {getEventData} from './redux/action';

const HomeScreen = (props: { navigation: any; }) => {
  const dispatch = useDispatch();
  const [eventList, setEventList] = useState(true);

  const userData = useSelector(state => state.auth.loginData);
  const eventData = useSelector(state => state.home.eventData.data?.events);

  useEffect(() => {
    (async function () {
      dispatch(getEventData(props.navigation));
    })();
  }, []);

  useEffect(() => {
    (async function () {
      setEventList(eventData);
    })();
  }, [eventData]);

  const ListEmpty =()=>{
    return(
      <View>
        <Text>{"No data"}</Text>
      </View>
    )
  }

  const renderEventList = (eventItem: { event_profile_img: any; event_name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; readable_from_date: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; event_price_from: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; event_price_to: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; danceStyles: ArrayLike<any> | null | undefined; city: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; country: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }, index: number) => {
    return (
      <View style={[HomeStyle.listContainer]}>
        <View style={[HomeStyle.flexRow]}>
          <View style={[HomeStyle.flexRow]}>
            <View>
              <Image
                source={{uri: eventItem?.event_profile_img}}
                style={[HomeStyle.profileImg]}
              />
            </View>
            <View style={[HomeStyle.titleContainer]}>
              <Text style={[HomeStyle.eventName]}>{eventItem?.event_name}</Text>
              <Text style={[HomeStyle.eventDate]}>
                {eventItem?.readable_from_date}
              </Text>
              <Text style={[HomeStyle.eventPrice]}>
                {eventItem?.event_price_from}
                {'-'}
                {eventItem?.event_price_to}
              </Text>

              <FlatList
              nestedScrollEnabled
                contentContainerStyle={{flex: 1}}
                data={eventItem.danceStyles}
                horizontal
                scrollEnabled
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item: danceData, index}) =>
                  renderDanceStyle(danceData, index)
                }
                showsVerticalScrollIndicator={false}
              />
            </View>
          </View>
          <View style={[HomeStyle.sideContainer]}>
            <View>
              <Icon
                style={[HomeStyle.flexEnd]}
                name="arrow-forward-sharp"
                size={18}
                color={Colors.black}
              />
              <Text style={[HomeStyle.eventCity]}>
                {eventItem.city}
                {','}
                {eventItem.country}
              </Text>
            </View>

            <View style={[HomeStyle.iconContainer]}>
              <Icon name="cloud-upload-outline" size={18} color={Colors.black} />
              <View style={{marginLeft: 10}}>
                <Icon name="heart-outline" size={18} color={Colors.black} />
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  };
  const renderDanceStyle = (danceData: { ds_name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }, index: React.Key | null | undefined) => {
    return (
      <View style={{paddingTop: '8%'}}>
        <View style={[HomeStyle.typeContainer]} key={index}>
          <Text style={[HomeStyle.danceText]}>{danceData?.ds_name}</Text>
        </View>
      </View>
    );
  };
  return (
    <View style={[HomeStyle.mainContainer]}>
      <StatusBar
        barStyle={'dark-content'}
        animated={true}
        backgroundColor={Colors.white}
      />
      <View style={[HomeStyle.container]}>
        <Text style={[HomeStyle.titleName]}>
          {'Hello '}
          {userData?.data?.user?.usr_fname}
          {'!'}
        </Text>
        <Text style={[HomeStyle.subTitle]}>{'Are you ready to dance?'}</Text>
      </View>
      <ScrollView style={[HomeStyle.BGColor, {flex: 1}]}>
        <FlatList
          data={eventList}
          ListEmptyComponent={ListEmpty()}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item: eventData, index}) =>
            renderEventList(eventData, index)
          }
          showsVerticalScrollIndicator={false}
        />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
