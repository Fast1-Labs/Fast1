import { StatusBar } from 'expo-status-bar';
import { View, Text, ScrollView, Image, useWindowDimensions } from 'react-native';

// @ts-ignore
import banner from '../../assets/banner.jpg';

import LastWinners from '~/components/LastWinners';
import RaceSchedule from '~/components/RaceSchedule';
import TopDrivers from '~/components/TopDrivers';
import TopTeams from '~/components/TopTeams';
import UpcomingRace from '~/components/UpcomingRace';

export default function LandingPage() {
  const { width, height } = useWindowDimensions();
  return (
    <ScrollView className="flex-1 bg-[#11100f]">
      <Image
        source={banner}
        style={{
          width,
          height: height / 5,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      />
      <UpcomingRace />
      <LastWinners />
      <RaceSchedule />
      <Text className="p-4 text-3xl font-bold text-white">Championship</Text>
      <View className="m-2 flex-row justify-between border border-gray-400 p-2">
        <TopDrivers />
        <TopTeams />
      </View>
      <StatusBar style="light" />
    </ScrollView>
  );
}
