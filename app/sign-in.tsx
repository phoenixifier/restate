import icons from "@/constants/icons";
import images from "@/constants/images";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SignIn: React.FC = () => {
	const handleLogin = () => {};
	return (
		<SafeAreaView className="bg-white h-full">
			<ScrollView contentContainerClassName="h-full">
				<Image
					source={images.onboarding}
					className="w-full h-4/6"
					resizeMode="contain"
				/>
				<View className="px-10">
					<Text className="text-base text-center uppercase font-rubik text-black-200">
						Welcome to ReState!
					</Text>
					<Text className="text-3xl font-rubik-bold text-black-300 text-center mt-2">
						Let's Get You Closer to {"\n"}
						<Text className="text-primary-300">Your Ideal Home</Text>
					</Text>
					<Text className="text-lg font-rubik mt-12 text-center text-black-200">
						Login to ReState with Google
					</Text>
					<TouchableOpacity
						onPress={handleLogin}
						className="w-full rounded-full bg-gray-50 shadow-md shadow-zinc-300 py-4 mt-5"
					>
						<View className="flex flex-row gap-2 items-center justify-center">
							<Image
								source={icons.google}
								className="size-5"
								resizeMode="contain"
							/>
							<Text className="text-lg font-rubik-medium text-black-300">
								Continue with Google
							</Text>
						</View>
					</TouchableOpacity>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default SignIn;
