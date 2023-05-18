import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { theme } from '../../../constants/theme'
import { AntDesign } from '@expo/vector-icons'

type Props = {
  minus: (mode: 'adults' | 'children') => void
  plus: (mode: 'adults' | 'children') => void
  numberOfAdults: number | null
  reset: () => void
  maxNumberOfGuests: number
  numberOfChildren: number | null
} 

const NumberOfChildrenSelector = ({ numberOfAdults, numberOfChildren, minus, plus, maxNumberOfGuests }: Props) => {
  return (
    <View style={styles.childrenSelectorContainer}>
      <Text style={styles.title}>Children</Text>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity
          disabled={numberOfChildren == 0 || !numberOfChildren ? true : false}
          onPress={() => minus('children')}
        >
          <AntDesign 
            name="minuscircleo" 
            size={22} 
            color={numberOfChildren == 0 || !numberOfChildren ? theme.colors.disabledText : theme.colors.infoText} 
            style={{paddingRight: 16}}
          />
        </TouchableOpacity>
        <Text style={{fontSize: 18}}>{numberOfChildren ? numberOfChildren : 0}</Text>
        <TouchableOpacity 
          disabled={numberOfAdults + numberOfChildren == maxNumberOfGuests ? true : false}
          onPress={() => plus('children')}
        >
          <AntDesign 
              name="pluscircleo" 
              size={22} 
              color={numberOfAdults + numberOfChildren == maxNumberOfGuests ? theme.colors.disabledText : theme.colors.infoText} 
              style={{paddingLeft: 16}}
            />
        </TouchableOpacity>              
      </View>
    </View>
  )
}

export default NumberOfChildrenSelector

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  header: {
    paddingTop: 24,
    flexDirection: 'row',
    paddingHorizontal: 14,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%'
  },
  clear: {
    fontSize: 16, 
    letterSpacing: 0.2, 
    color: theme.colors.infoText
  },
  numberOfGuests: {
    fontSize: 14, 
    letterSpacing: 0.2, 
    color: theme.colors.infoText
  },
  clientIndication: {
    fontSize: 22,
    fontWeight: '500',
    letterSpacing: 0.3,
    color: theme.colors.text,
    paddingHorizontal: 14,
    paddingTop: 36,
    alignSelf: 'flex-start',
    flexGrow: 1
  }, 
  saveContainer: {
    height: 80,
    borderTopWidth: 1,
    borderColor: theme.colors.border,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 14
  },
  border: {
    borderBottomColor: theme.colors.infoText, 
    borderBottomWidth: 1
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  infoText: {
    color: theme.colors.infoText, 
    fontSize: 13, 
    letterSpacing: 0.2, 
    marginTop: 16
  },
  adultsSelectorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: theme.colors.text,
    fontSize: 16,
    letterSpacing: 0.4
  },
  childrenSelectorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 24
  }
})