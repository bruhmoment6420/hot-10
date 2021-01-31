import React, { useState } from 'react';
import { View, Switch, StyleSheet, Text } from 'react-native';
import { AppearanceProvider } from 'react-native-appearance';

const App = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <AppearanceProvider>
      <View style={styles.container}>
        <Switch
          style={{ marginTop: 3 }}
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
        <Text style={styles.warningText}>Darkmode (incredibly broken)</Text>
      </View>
    </AppearanceProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  warningText: {
    paddingLeft: 15,
    fontWeight: 'bold',
  },
});
