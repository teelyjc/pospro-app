import { Fragment, FunctionComponent } from "react";
import { Text } from "react-native";
import { Slot } from "expo-router";
import { useFonts } from "expo-font";

const RootLayout: FunctionComponent = () => {
  const [isFontLoaded] = useFonts({
    NotoSansThai: require("@/public/fonts/NotoSansThai-Regular.ttf"),
  });

  if (!isFontLoaded) {
    return (
      <Fragment>
        <Text>App is starting..</Text>
      </Fragment>
    );
  }

  if (isFontLoaded) {
    return (
      <Fragment>
        <Slot />
      </Fragment>
    );
  }
};

export default RootLayout;
