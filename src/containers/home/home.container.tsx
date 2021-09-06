import React, {useState} from 'react';
import {HomeView} from './home.view';
import {Asset} from '@store/assets/assets.model';

export const HomeContainer = () => {
  const ASSETS: Asset[] = [
    {symbol: 'BTC', name: 'Bitcoin', balance: 0.23164183, value: 2450.85},
    {symbol: 'XRP', name: 'Ripple', balance: 3786.6051, value: 2123.89},
    {symbol: 'ADA', name: 'Cardano', balance: 2121.156, value: 1882.39},
  ];
  const [snappedAssetCardIndex, setSnappedAssetCardIndex] = useState<number>(0);
  const onSnapToAssetCard = (index: number) => {
    setSnappedAssetCardIndex(index);
  };
  return (
    <HomeView
      assets={ASSETS}
      onSnapToAssetCard={onSnapToAssetCard}
      snappedAssetCardIndex={snappedAssetCardIndex}
    />
  );
};
