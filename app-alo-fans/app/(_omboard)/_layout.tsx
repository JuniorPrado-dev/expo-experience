import { Redirect, Stack } from "expo-router";

const OnboardingLayout = () => {

  return (
    <>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            headerShown: false,
            headerTitle: "layout_onboarding",
          }}
        />
      </Stack>
    </>
  );
};

export default OnboardingLayout;