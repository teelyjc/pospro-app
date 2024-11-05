import { Fragment, FunctionComponent, ReactNode, useCallback } from "react";
import {
  Alert,
  Linking,
  TouchableOpacity,
  Text,
  StyleProp,
  TextStyle,
} from "react-native";

interface LinkProps {
  children: ReactNode;
  href: string;
  style?: StyleProp<TextStyle>;
}

export const Link: FunctionComponent<LinkProps> = ({
  href,
  children,
  style,
}) => {
  const handlePress = useCallback(async () => {
    const isSupported = await Linking.canOpenURL(href);
    if (isSupported) {
      Linking.openURL(href);
    } else {
      Alert.alert("URL is not valid.");
    }
  }, [href]);

  return (
    <Fragment>
      <TouchableOpacity onPress={handlePress}>
        <Text style={style}>{children}</Text>
      </TouchableOpacity>
    </Fragment>
  );
};
