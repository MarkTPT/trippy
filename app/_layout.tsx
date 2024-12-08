import { Asset } from "expo-asset";
import Constants from "expo-constants";
import { Footer, Header } from "@/components";
import { Slot, usePathname } from "expo-router";
import { loadAsync as loadFontsAsync } from "expo-font";
import { useCallback, useEffect, useRef, useState } from "react";
import {
	View,
	Animated,
	StyleSheet,
	ScrollView,
	useAnimatedValue,
} from "react-native";
import * as SplashScreen from "expo-splash-screen";

// Instruct SplashScreen not to hide yet, we want to do this manually
SplashScreen.preventAutoHideAsync().catch(() => {
	/* reloading the app might trigger some race conditions, ignore them */
});

function AnimatedAppLoader({ children }: React.PropsWithChildren) {
	const backgroundColor = Constants.expoConfig?.splash?.backgroundColor;
	const splashImage = Constants.expoConfig?.splash?.image;

	if (!backgroundColor) {
		throw new Error(
			`The "splash.backgroundColor" field is missing from your app.json. This is required to make the splash screen visible.`
		);
	}
	if (!splashImage) {
		throw new Error(
			`The "splash.image" field is missing from your app.json. This is required to make the splash screen visible.`
		);
	}

	const [isAppReady, setAppReady] = useState(false);

	const onImageLoaded = useCallback(async () => {
		try {
			await SplashScreen.hideAsync();

			await Promise.all([
				loadFontsAsync({
					"Poppins-Black": require("../assets/fonts/Poppins/Poppins-Black.ttf"),
					"Poppins-BlackItalic": require("../assets/fonts/Poppins/Poppins-BlackItalic.ttf"),
					"Poppins-Bold": require("../assets/fonts/Poppins/Poppins-Bold.ttf"),
					"Poppins-BoldItalic": require("../assets/fonts/Poppins/Poppins-BoldItalic.ttf"),
					"Poppins-ExtraBold": require("../assets/fonts/Poppins/Poppins-ExtraBold.ttf"),
					"Poppins-ExtraBoldItalic": require("../assets/fonts/Poppins/Poppins-ExtraBoldItalic.ttf"),
					"Poppins-ExtraLight": require("../assets/fonts/Poppins/Poppins-ExtraLight.ttf"),
					"Poppins-ExtraLightItalic": require("../assets/fonts/Poppins/Poppins-ExtraLightItalic.ttf"),
					"Poppins-Italic": require("../assets/fonts/Poppins/Poppins-Italic.ttf"),
					"Poppins-Light": require("../assets/fonts/Poppins/Poppins-Light.ttf"),
					"Poppins-LightItalic": require("../assets/fonts/Poppins/Poppins-LightItalic.ttf"),
					"Poppins-Medium": require("../assets/fonts/Poppins/Poppins-Medium.ttf"),
					"Poppins-MediumItalic": require("../assets/fonts/Poppins/Poppins-MediumItalic.ttf"),
					"Poppins-Regular": require("../assets/fonts/Poppins/Poppins-Regular.ttf"),
					"Poppins-SemiBold": require("../assets/fonts/Poppins/Poppins-SemiBold.ttf"),
					"Poppins-SemiBoldItalic": require("../assets/fonts/Poppins/Poppins-SemiBoldItalic.ttf"),
					"Poppins-Thin": require("../assets/fonts/Poppins/Poppins-Thin.ttf"),
					"Poppins-ThinItalic": require("../assets/fonts/Poppins/Poppins-ThinItalic.ttf"),
				}),
			]);
		} catch (e) {
			console.warn(e);
		} finally {
			setAppReady(true);
		}
	}, []);

	// #region Splash screen animation
	const animation = useAnimatedValue(1);
	const [isSplashAnimationComplete, setAnimationComplete] = useState(false);

	useEffect(() => {
		if (!isAppReady) {
			return;
		}

		Animated.timing(animation, {
			toValue: 0,
			duration: 500,
			useNativeDriver: true,
		}).start(() => setAnimationComplete(true));
	}, [isAppReady]);
	// #endregion Splash screen animation

	// #region Prepare splash screen
	const [isSplashReady, setSplashReady] = useState(false);

	useEffect(() => {
		async function prepareSplashScreen() {
			if (!splashImage) {
				return;
			}

			await Asset.fromURI(splashImage).downloadAsync();
			setSplashReady(true);
		}

		prepareSplashScreen();
	}, [splashImage]);

	// If splash screen is not ready, don't render anything
	if (!isSplashReady) {
		return null;
	}
	// #endregion Prepare splash screen

	return (
		<View style={{ flex: 1 }}>
			{isAppReady && children}

			{!isSplashAnimationComplete && (
				<Animated.View
					pointerEvents="none"
					style={[
						StyleSheet.absoluteFill,
						{ backgroundColor, opacity: animation },
					]}
				>
					<Animated.Image
						style={{
							width: "100%",
							height: "100%",
							resizeMode: Constants.expoConfig?.splash?.resizeMode || "contain",
							transform: [{ scale: animation }],
						}}
						source={{ uri: splashImage }}
						onLoadEnd={onImageLoaded}
						fadeDuration={0}
					/>
				</Animated.View>
			)}
		</View>
	);
}

export default function RootLayout() {
	const scrollViewRef = useRef<ScrollView>(null);

	const pathName = usePathname();

	useEffect(() => {
		if (!scrollViewRef.current) {
			return;
		}

		scrollViewRef.current.scrollTo({ y: 0, animated: true });
	}, [pathName]);

	return (
		<AnimatedAppLoader>
			<Header />

			<ScrollView
				ref={scrollViewRef}
				style={{ backgroundColor: "#fff" }}
			>
				<Slot />

				<Footer />
			</ScrollView>
		</AnimatedAppLoader>
	);
}
