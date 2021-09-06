import React, {useRef, useCallback, useMemo} from 'react';
import {SafeAreaView, Dimensions, View, Text, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {styles} from './home.styles';
import {Header, AssetCard, Button, AssetItem} from '@components/index';
import {Colors} from '@styles/colors';
import {Asset} from '@store/assets/assets.model';

interface HomeViewProps {
  assets: Asset[];
  onSnapToAssetCard: (index: number) => void;
  snappedAssetCardIndex: number;
}

export const HomeView = ({
  assets,
  onSnapToAssetCard,
  snappedAssetCardIndex,
}: HomeViewProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header
        title={'My wallet'}
        Right={<Icon name={'bell-outline'} color={Colors.WHITE} size={32} />}
      />
      <View style={styles.carouselContainer}>
        <Carousel
          data={assets}
          renderItem={({item}: {item: Asset}) => <AssetCard asset={item} />}
          sliderWidth={screenWidth}
          itemWidth={ITEM_WIDTH}
          containerCustomStyle={styles.carousel}
          onSnapToItem={onSnapToAssetCard}
          inactiveSlideScale={1}
        />
      </View>
      <Pagination
        dotsLength={assets.length}
        activeDotIndex={snappedAssetCardIndex}
        dotColor={Colors.ACCENT}
        inactiveDotColor={Colors.GRAY}
        inactiveDotScale={1}
      />
      <View style={styles.transferButtonsContainer}>
        <Button
          text={'Deposit'}
          style={styles.transferButton}
          backgroundColor={Colors.WHITE}
          textColor={Colors.BLACK}
        />
        <Button text={'Withdraw'} style={styles.transferButton} />
      </View>
      <View style={styles.assetSheetContainer}>
        <View style={styles.assetSheetTitleContainer}>
          <Text style={styles.assetSheetTitle}>Asset Balances</Text>
          <Icon name="tune" color={Colors.MEDIUM_GRAY} size={24} />
        </View>
        <View style={styles.assetFlatListContainer}>
          <FlatList
            data={assets}
            keyExtractor={i => i.symbol}
            renderItem={({item}) => <AssetItem asset={item} />}
            contentContainerStyle={styles.assetItemsContainer}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
      <View style={styles.bottomNavigation}>
        {[
          'home-outline',
          'chart-line',
          'swap-horizontal-circle',
          'note-text-outline',
          'wallet-outline',
        ].map(name => (
          <Icon name={name} size={30} key={name} />
        ))}
      </View>
    </SafeAreaView>
  );
};

const {width: screenWidth} = Dimensions.get('screen');
const MARGIN = 18;
const ITEM_WIDTH = screenWidth - 3 * MARGIN;
