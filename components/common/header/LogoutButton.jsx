import React from 'react'
import { TouchableOpacity, Image, View, Text } from 'react-native' 
import styles from './screenheader.style';

import { logout } from '../../../services/forumDatabaseService';

const LogoutButton = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.LogoutButton} onPressIn={logout}>
        <Text style={styles.logoutButton}>Log out</Text>
      </TouchableOpacity>
    </View>
  )
}

export default LogoutButton;