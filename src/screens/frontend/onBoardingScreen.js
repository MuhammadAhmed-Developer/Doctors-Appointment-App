import {
  StyleSheet,
  View,
  SafeAreaView,
  ImageBackground,
  Animated,
  StatusBar,
  FlatList,
} from 'react-native';
import React, {useState, useRef} from 'react';

import ratio from '../../styles/consts/ratio';
import  { Slides } from '../../components/slides';
import Paginator_Sec from '../../components/paginator';
import GreenBtn from '../../components/greenBtn';
import OnBoardingItem from '../../components/onBoardingItem';
// import SCREENS from '../library/SCREENS';
const {pixelSizeVertical} = ratio;

const OnBoardingScreen = ({navigation}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);

  const scrollToNext = () => {
    if (currentIndex < Slides.length - 1) {
      slidesRef.current.scrollToIndex({index: currentIndex + 1});
      setCurrentIndex(currentIndex + 1);
    } else {
      // navigation.navigate(SCREENS.LOGIN);
      console.log('login');
    }
  };

  const handleMomentumScrollEnd = event => {
    const contentOffset = event.nativeEvent.contentOffset.x;
    const index = Math.round(contentOffset / ratio.SCREEN_WIDTH);
    setCurrentIndex(index);
  };

  return (
    <SafeAreaView>
      <ImageBackground
        style={styles.container}
        source={require('../../assets/images/onboarding1.png')}>
        <StatusBar translucent backgroundColor={'rgba(0,0,0,0)'} />
        <FlatList
          data={Slides}
          renderItem={({item}) => <OnBoardingItem item={item} />}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {
              useNativeDriver: false,
            },
          )}
          keyExtractor={item => item.id}
          ref={slidesRef}
          onMomentumScrollEnd={handleMomentumScrollEnd}
        />
        <View style={styles.bottomContainer}>
          <Paginator_Sec data={Slides} scrollX={scrollX} />
          <GreenBtn
            text={currentIndex == 2 ? 'Finish' : 'Next'}
            handleFunc={scrollToNext}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default OnBoardingScreen;

const styles = StyleSheet.create({
  bottomContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: pixelSizeVertical(15),
    gap: pixelSizeVertical(45),
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
});
