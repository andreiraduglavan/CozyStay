import { DarkTheme, DefaultTheme } from "@react-navigation/native";
import { modelName } from "expo-device";
import { Appearance, Platform } from "react-native";

const colorScheme = Appearance.getColorScheme()

export const theme = colorScheme == 'light' ? {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    infoText: 'rgba(0,0,0,0.67)',
    disabledText: 'rgba(0,0,0,0.33)',
    background: 'rgb(250,250,246)', 
    primary: '#AD9371',
    primaryWithOpacity: 'rgba(173,143,113,0.33)',
    secondary: '#827b76'
  }
} : {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    infoText: 'rgba(255,255,255,0.67)',
    disabledText: 'rgba(255,255,255,0.33)',
    primary: '#c9b195',
    primaryWithOpacity: 'rgba(201,177,149,0.33)',
    secondary: '#827b76'
  }
}

export const hasHomeIndicator = !['iPhone 5', 'iPhone 5s', 'iPhone 5c', 'iPhone 6 Plus', 'iPhone 6', 'iPhone 6s', 'iPhone 6s Plus', 'iPhone 6s', 'iPhone SE (1st generation)', 'iPhone 7 Plus', 'iPhone 7', 'iPhone 8 Plus', 'iPhone 8', 'iPhone SE (2nd generation)', 'iPad Pro 11-inch', 'iPad Pro 12.9-inch (3rd generation)', 'iPad Pro 11-inch (2nd generation)', 'iPad Pro 12.9-inch (4th generation)', 'iPad Pro 11-inch (3rd generation)', 'iPad Pro 12.9-inch (5th generation)', 'iPad Pro 11-inch (4th generation)', 'iPad Pro 12.9-inch (6th generation)', 'iPad Pro 12.9-inch (6th generation)']
  .map((model) => model == modelName )
  .includes(true) && Platform.OS == 'ios'
