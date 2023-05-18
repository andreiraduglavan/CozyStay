import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useMemo } from 'react'
import BottomSheet from '@gorhom/bottom-sheet'
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types'
import { theme } from '../../../constants/theme'
import NumberOfAdultsSelector from './NumberOfAdultsSelector'

type Props = {
  bottomSheetRef: React.MutableRefObject<BottomSheetMethods>
  minus: (mode: 'adults' | 'children') => void
  plus: (mode: 'adults' | 'children') => void
  numberOfAdults: number | null
  numberOfChildren: number | null
  reset: () => void
  maxNumberOfGuests: number
} 

const GuestSelectorBottomSheet = ({ 
  bottomSheetRef, 
  minus, 
  plus, 
  reset, 
  numberOfAdults, 
  numberOfChildren, 
  maxNumberOfGuests 
}: Props) => {
  const snapPoints = useMemo(() => ['40%'], [])
  
  
  return (
    <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
        style={{
          backgroundColor: theme.colors.background,
          shadowColor: 'black',
          shadowRadius: 10,
          elevation: 10,
          shadowOpacity: 0.2,
          shadowOffset: {width: 0, height: 0},
          borderRadius: 16
        }}
        handleStyle={{backgroundColor: theme.colors.background, borderRadius: 16}}
      >
        <View style={{flex: 1, backgroundColor: theme.colors.background, paddingHorizontal: 20, justifyContent: 'space-between'}}>
          <Text style={styles.infoText}>This place has a maximum of 12 guests.</Text>
          <View>
            <NumberOfAdultsSelector 
              maxNumberOfGuests={maxNumberOfGuests}
              minus={minus}
              numberOfAdults={numberOfAdults}
              numberOfChildren={numberOfChildren}
              plus={plus}
              reset={reset}
            />

          </View>

          <View style={[styles.saveContainer, {justifyContent: 'space-between', marginHorizontal: -20, height: 50}]}>
            <TouchableOpacity onPress={reset}>
              <Text style={styles.numberOfGuests}>Reset</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => bottomSheetRef.current.close()}>
              <View style={{backgroundColor: theme.colors.text, paddingHorizontal: 32, paddingVertical: 8, borderRadius: 8}}>
                <Text style={{color: 'white', letterSpacing: 0.4}}>Save</Text>
              </View>
            </TouchableOpacity>

          </View>

        </View>
      </BottomSheet>
  )
}

export default GuestSelectorBottomSheet

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