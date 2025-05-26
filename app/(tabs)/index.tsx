import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import * as NavigationBar from 'expo-navigation-bar';
import React, { useEffect } from 'react';
import { Platform, StyleSheet } from 'react-native';

export default function HomeScreen() {
  useEffect(() => {
    if (Platform.OS === 'android') {
      NavigationBar.setBackgroundColorAsync('#228B22');
      NavigationBar.setButtonStyleAsync('light');
    }
  }, []);

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#228B22', dark: '#008000' }}
      headerHeight={300}
      headerImage={
        <>   
          <Image
            source={require('@/images/ingredients-header.jpg')}
            style={styles.headerImage}
            contentFit="cover"
          />
          <LinearGradient
            colors={['rgba(0,0,0,0.3)', 'transparent']}
            style={styles.headerOverlay}
          />
        </>
      }
    >
      <ThemedView className="mt-4 mb-6 px-4 flex-row items-center">
        <ThemedText type="title" className="text-3xl leading-10 text-white text-shadow-md">
          Ingredient List
        </ThemedText>
      </ThemedView>

      <ThemedView className="bg-white p-4 mx-4 mb-6 rounded-2xl shadow-md">

      </ThemedView>
    </ParallaxScrollView>
  );
}
const styles = StyleSheet.create({
  headerImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  headerOverlay: {
    ...StyleSheet.absoluteFillObject,
  },
  
    })
