import React from 'react';
import {StyleSheet, View} from 'react-native';
import Charts from '../components/Charts';

function StatisticsScreen() {
  return (
    <View>
      <Charts />
    </View>
  );
}

const styles = StyleSheet.create({
  block: {},
});

export default StatisticsScreen;
