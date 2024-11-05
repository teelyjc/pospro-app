import { styles } from "@/styles/styles";
import { Fragment, FunctionComponent, ReactNode } from "react";
import {
  TouchableOpacity,
  Text,
  StyleProp,
  ViewStyle,
  TextStyle,
} from "react-native";
import { Link } from "expo-router";

interface ButtonProps {
  children: ReactNode;
  href: string;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

export const Button: FunctionComponent<ButtonProps> = ({
  children,
  style,
  textStyle,
  href,
}) => {
  return (
    <Fragment>
      <Link
        href={href}
        style={[
          {
            margin: "auto",
            paddingHorizontal: 25,
            paddingVertical: 8,
          },
          style,
        ]}
      >
        <Text style={[styles.font, textStyle]}>{children}</Text>
      </Link>
    </Fragment>
  );
};
