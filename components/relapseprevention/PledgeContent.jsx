import React from 'react'
import { Text, View, Image } from 'react-native'

import styles from './relapseprevention.style'
import { icons } from '../../constants'

const PledgeContent = ({pledge}) => {
  if (pledge.pledge1) {
    return (
      <View>
          <View style={styles.pledgeRecordContainer}>
              <Image source={icons.tickbox} style={styles.tickBoxImage}/>
              <Text style={styles.pledgeText}>{pledge.pledge1}</Text>
          </View>
          <View style={styles.pledgeRecordContainer}>
              <Image source={icons.tickbox} style={styles.tickBoxImage}/>
              <Text style={styles.pledgeText}>{pledge.pledge2}</Text>
          </View>
          <View style={styles.pledgeRecordContainer}>
              <Image source={icons.tickbox} style={styles.tickBoxImage}/>
              <Text style={styles.pledgeText}>{pledge.pledge3}</Text>
          </View>
      </View>
    )
  } else {
    return (
      <View><Text style={styles.planBodyContainer}>{pledge}</Text></View>
    )
  }
} 

export default PledgeContent