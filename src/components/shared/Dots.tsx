import { useEffect, useState } from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'

const renderDot = (index: number, activeIndex: number) => {
  if (index == 1) {
    if (activeIndex == 1 ) {
      return <View style={[{backgroundColor: '#FFF', height: 6.5, width:6.5, opacity: 1}, styles.dot]}></View>
    } else if (activeIndex == 2) {
      return <View style={[{backgroundColor: '#FFF', height: 5.5, width:5.5, opacity: 0.67}, styles.dot]}></View>
    } else {
      return <View style={[{backgroundColor: '#FFF', height: 4, width:4, opacity: 0.67}, styles.dot]}></View>
    }
  } else if (index == 2) {
    if (activeIndex == 1 || activeIndex == 3 ) {
      return <View style={[{backgroundColor: '#FFF', height: 5.5, width:5.5, opacity: 0.67}, styles.dot]}></View>
    } else if (activeIndex == 2) {
      return <View style={[{backgroundColor: '#FFF', height: 6.5, width:6.5, opacity: 1}, styles.dot]}></View>
    } else {
      return <View style={[{backgroundColor: '#FFF', height: 4, width:4, opacity: 0.67}, styles.dot]}></View>
    } 
  } else if (index == 3) {
    if (activeIndex == 2 || activeIndex == 4 ) {
      return <View style={[{backgroundColor: '#FFF', height: 5.5, width:5.5, opacity: 0.67}, styles.dot]}></View>
    } else if (activeIndex == 3) {
      return <View style={[{backgroundColor: '#FFF', height: 6.5, width:6.5, opacity: 1}, styles.dot]}></View>
    } else {
      return <View style={[{backgroundColor: '#FFF', height: 4, width:4, opacity: 0.67}, styles.dot]}></View>
    } 
  } else if (index == 4) {
    if (activeIndex == 3 || activeIndex == 5 ) {
      return <View style={[{backgroundColor: '#FFF', height: 5.5, width:5.5, opacity: 0.67}, styles.dot]}></View>
    } else if (activeIndex == 4) {
      return <View style={[{backgroundColor: '#FFF', height: 6.5, width:6.5, opacity: 1}, styles.dot]}></View>
    } else {
      return <View style={[{backgroundColor: '#FFF', height: 4, width:4, opacity: 0.67}, styles.dot]}></View>
    } 
  } else if (index == 5) {
    if (activeIndex == 5 ) {
      return <View style={[{backgroundColor: '#FFF', height: 6.5, width:6.5, opacity: 1}, styles.dot]}></View>
    } else if (activeIndex == 4) {
      return <View style={[{backgroundColor: '#FFF', height: 5.5, width:5.5, opacity: 0.67}, styles.dot]}></View>
    } else {
      return <View style={[{backgroundColor: '#FFF', height: 4, width:4, opacity: 0.67}, styles.dot]}></View>
    }
  }
}

const Dots = ({numberOfItems, activeIndex}: {numberOfItems: number, activeIndex: number}) => {
  const [activeDot, setActiveDot] = useState(0)
  useEffect(() => {
    if ( activeIndex < 3 ) {
      setActiveDot(activeIndex)
    } else {
      if ( numberOfItems-1-activeIndex == 1) {
        setActiveDot(3)
      } else if ( numberOfItems-1-activeIndex == 0) {
        setActiveDot(4)
      } else {
        setActiveDot(2)
      }
    }
  }, [activeIndex])
  
  return (
    <>
      { numberOfItems < 5 ?
        null :
        <FlatList 
          data={[...Array(numberOfItems < 5 ? numberOfItems : 5).keys()]}
          renderItem={({index}) => (
            <>
              { renderDot(index+1, activeDot+1) }
            </>
          ) }
          contentContainerStyle={{alignItems: 'center'}}
          horizontal
        />
      }
    </>
  )
}

export default Dots

const styles = StyleSheet.create({
  dot: {
    borderRadius: 100,
    marginHorizontal: 3
  }
})