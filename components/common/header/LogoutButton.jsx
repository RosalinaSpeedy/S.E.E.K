import React, { useEffect, useState } from 'react'
import { TouchableOpacity, Image, View, Text } from 'react-native'
import styles from './screenheader.style';

import { logout, getSession } from '../../../services/forumDatabaseService';

const LogoutButton = () => {

  const [showButton, setShowButton] = useState(null);
  const [loadingSession, setLoadingSession] = useState(true);

  useEffect(() => {
    getSession().then(session => 
      // (typeof JSON.parse(session).email !== 'undefined' 
      // && typeof JSON.parse(session).username !== 'undefined'  
      // && typeof JSON.parse(session).id !== 'undefined') ?
      // setShowButton(true) : setShowButton(false)
      (setShowButton(JSON.parse(session)))
    );
    setLoadingSession(false)
  }, [loadingSession]);

  if (!showButton || loadingSession) {
    return null;
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.LogoutButton} onPressIn={logout}>
        <Text style={styles.logoutButton}>Log out</Text>
      </TouchableOpacity>
    </View>
  )
}

export default LogoutButton;