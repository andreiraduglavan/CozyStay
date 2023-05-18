import { View, StyleSheet, Dimensions, Image, FlatList, TouchableWithoutFeedback, Text } from 'react-native'
import TouchableWithScaling from '../shared/TouchableWithScaling'
import { theme } from '../../constants/theme'
import { Ionicons } from '@expo/vector-icons' 
import { mockProperties } from '../../constants/mock'
import { useNavigationContext } from '../../context/NavigationContext'

const screenWidth = Dimensions.get('screen').width

const LocationCard = () => {
  const { rootNavigation } = useNavigationContext()

  return (
    <TouchableWithScaling onPress={() => rootNavigation.push('Location') }>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <FlatList 
            data={mockProperties[0].images}
            renderItem={({item, index}) => (
              <TouchableWithoutFeedback 
                onPress={() => rootNavigation.push('Location') }
                style={{position: 'relative'}}
              >
                <Image 
                  source={item}
                  style={styles.image}
                  key={index}
                />
              </TouchableWithoutFeedback>
            )}
            horizontal
            snapToInterval={screenWidth-28}
            decelerationRate='fast'
            showsHorizontalScrollIndicator={false}
            scrollToOverflowEnabled={false}
            alwaysBounceVertical={false}
            bounces={false}
          />
        </View>
        
        <View style={styles.infoContainer}>
          <Text style={styles.title}>BarnHaus</Text>
          <View style={styles.locationContainer}>
            <Ionicons name="location-sharp" size={13} color={theme.colors.infoText} />
            <Text style={styles.location}>Jibert, Brașov</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.price}>1500 LEI <Text style={{fontWeight: '400'}}>NIGHT</Text></Text>
            <Text style={{fontWeight: '700', color: theme.colors.secondary, fontSize: 20, marginHorizontal: 4, paddingTop: 4}}>·</Text>
            <Text style={[styles.price, {fontWeight: '400'}]}>12 GUESTS</Text>
          </View>
        </View>
        
      </View>
    </TouchableWithScaling>
  )
}

export default LocationCard

const styles = StyleSheet.create({
  container: {
    marginBottom: 32,
    overflow: 'hidden',
  },
  imageContainer: {
    position: 'relative', 
    borderRadius: 18, 
    overflow: 'hidden'
  },
  title: {
    color: theme.colors.text,
    fontSize: 20,
    fontWeight: '600',
    letterSpacing: 0.2
  },
  image: {
    width: screenWidth-28,
    height: (screenWidth-28)*3/4,
  },
  infoContainer: {
    paddingHorizontal: 6,
    marginTop: 12
  },
  locationContainer: {
    flexDirection: 'row',
    marginTop: 4,
    alignItems: 'center'
  },
  location: {
    color: theme.colors.infoText,
    letterSpacing: 0.15,
    marginLeft: 4
  },
  price: {
    //fontSize: 16,
    fontWeight: '700',
    color: theme.colors.secondary,
    letterSpacing: 0.18,
    marginTop: 6
  }
})