import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';
import React from 'react';
import {Dimensions, View, Text, StyleSheet} from 'react-native';
const screenWidth = Dimensions.get('window').width;

function Charts() {
  return (
    <View>
      <View>
        <Text style={styles.title}>수면 시간</Text>
      </View>

      <BarChart
        data={{
          //x축 이름
          labels: ['January', 'February', 'March', 'April', 'May', 'June'],
          datasets: [
            {
              //표시할 값
              data: [
                //Math.random() * 100,
                20, 45, 28, 80, 99, 43,
              ],
            },
          ],
        }}
        width={Dimensions.get('window').width} // 화면 너비만큼 채우기
        height={220} //그래프 높이
        // yAxisLabel="$" //y축 첫글자
        // yAxisSuffix="k" //y축 끝글자
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: '#e26a00',
          backgroundGradientFrom: '#ffffff', //왼쪽 색(그라데이션)
          backgroundGradientTo: '#ffffff', //오른쪽 색
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, //막대, 점선 색
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, //글자 색
          barPercentage: 0.8, //막대 너비
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '9',
            stroke: '#ffa726',
          },
        }}
        bezier //선그래프에서 곡선옵션
        style={{
          marginVertical: 8, //그래프 위 마진
          borderRadius: 0, //그림 테두리 둥근정도
        }}
      />
    </View>
  );
}

const chartConfig = {
  backgroundGradientFrom: '#1E2923',
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: '#08130D',
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    color: 'black',
    marginTop: 5,
  },
});

export default Charts;
