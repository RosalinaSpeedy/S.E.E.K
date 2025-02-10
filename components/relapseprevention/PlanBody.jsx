import React from 'react'
import { Text, View } from 'react-native'

import styles from './relapseprevention.style'

const PlanBody = ({plan}) => {
  return (
    <View style={styles.planBodyContainer}>
      <Text style={styles.planHeading}>Triggers:</Text>
      <Text>{`\u2022 ${plan.trigger1}`}</Text>
      <Text>{`\u2022 ${plan.trigger2}`}</Text>
      <Text>{`\u2022 ${plan.trigger3}`}</Text>
      <Text style={styles.planHeading}>Warning signs:</Text>
      <Text>{`\u2022 ${plan.warningSign1}`}</Text>
      <Text>{`\u2022 ${plan.warningSign2}`}</Text>
      <Text>{`\u2022 ${plan.warningSign3}`}</Text>
      <Text style={styles.planHeading}>Coping strategies:</Text>
      <Text>{`\u2022 ${plan.copingStrategy1}`}</Text>
      <Text>{`\u2022 ${plan.copingStrategy2}`}</Text>
      <Text>{`\u2022 ${plan.copingStrategy3}`}</Text>
    </View>
  )
}

export default PlanBody