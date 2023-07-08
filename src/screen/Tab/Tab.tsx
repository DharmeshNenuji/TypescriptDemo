import React, {useState} from 'react'
import {useWindowDimensions, View} from 'react-native'
import {SceneMap, TabView} from 'react-native-tab-view'

import {styles} from './TabStyle'

const FirstRoute = () => <View style={styles.tab1} />

const SecondRoute = () => <View style={styles.tab2} />

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute
})
const Tab = () => {
  const layout = useWindowDimensions()
  const [index, setIndex] = useState(0)
  // const [data, setdata] = useState('');
  const [routes] = useState([
    {key: 'first', title: 'First'},
    {key: 'second', title: 'Second'}
  ])

  // const appFunction = (data: any[]) => {
  //   setdata(data);
  // };

  return (
    <View style={styles.container}>
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
      />
    </View>
  )
}

export default Tab
