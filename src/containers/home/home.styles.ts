import {StyleSheet, Dimensions} from 'react-native';
import {Colors} from '@styles/colors';

const {width: screenWidth, height: screenHeight} = Dimensions.get('screen');
export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.BACKGROUND,
    height: '100%',
  },
  carouselContainer: {},
  carousel: {
    marginTop: 8,
  },
  transferButtonsContainer: {
    flexDirection: 'row',
    marginHorizontal: 16,
    marginBottom: 36,
  },
  transferButton: {
    marginHorizontal: 8,
  },
  assetSheetContainer: {
    flexGrow: 1,
    backgroundColor: Colors.WHITE,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  assetSheetTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginTop: 24,
    marginHorizontal: 24,
    paddingBottom: 16,
  },
  assetSheetTitle: {
    fontSize: 20,
    fontWeight: '500',
  },
  assetFlatListContainer: {
    height: screenHeight / 3,
    //flexGrow: 1
  },
  assetItemsContainer: {
    flexGrow: 1,
    paddingBottom: 100,
  },
  bottomNavigation: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
    zIndex: 4,
    backgroundColor: Colors.WHITE,
    borderTopWidth: 2,
    borderTopColor: Colors.LIGHT_GRAY + '66',
  },
});
