import { Button } from "@/components/Button";
import { styles } from "@/styles/styles";
import { FunctionComponent } from "react";
import { Text, View } from "react-native";

const SignInPage: FunctionComponent = () => {
  return (
    <View style={styles.container}>
      <Button href="/">กลับหน้าแรก</Button>
      <Text style={[styles.font, styles.textCenter, styles.textHeader]}>
        เข้าสู่ระบบ
      </Text>
    </View>
  );
};

export default SignInPage;
