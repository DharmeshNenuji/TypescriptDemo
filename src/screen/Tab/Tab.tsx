import React, {useState} from 'react';
import {Text, View, useWindowDimensions} from 'react-native';
import {SceneMap, TabView} from 'react-native-tab-view';

type Props = {};
const FirstRoute = () => <View style={{flex: 1, backgroundColor: '#ff4081'}} />;

const SecondRoute = () => (
  <View style={{flex: 1, backgroundColor: '#673ab7'}} />
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});
const Tab = (props: Props) => {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [data, setdata] = useState('');
  const [routes] = useState([
    {key: 'first', title: 'First'},
    {key: 'second', title: 'Second'},
  ]);

  const appFunction = (data: any[]) => {
    setdata(data);
  };
  
  return (
    <View style={{flex: 1}}>
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
      />
    </View>
  );
};

export default Tab;
