import { FunctionComponent } from "react";
import { Text, View } from "react-native";
import { styles } from "@/styles/styles";
import { Link } from "@/components/Link";
import { Button } from "@/components/Button";

const IndexPage: FunctionComponent = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          marginHorizontal: "auto",
          backgroundColor: "#f3d36f",
          padding: 10,
          borderRadius: 5,
        }}
      >
        <Text style={[styles.font]}>
          โปรเจ็คนี้กำลังอยู่ในช่วงพัฒนา อาจจะพบบัคและข้อผิดพลาด ! {"\n"}
          ถ้าเจอปัญหาใดๆ สามารถเปิด Issue ได้ที่{" "}
          <Link
            href="https://github.com/teelyjc/pospro"
            style={[styles.textCenter, styles.font]}
          >
            ที่นี่
          </Link>
        </Text>
      </View>
      <Text style={[styles.font, styles.textCenter, styles.textHeader]}>
        Cr-PosPro
      </Text>
      <Text style={[styles.font, styles.textCenter, styles.textDescription]}>
        เป็นโปรเจ็ค Point Of Sales {"\n"}
        สำหรับร้านอาหารและคาเฟ่
      </Text>
      <Text style={[styles.font, styles.textCenter, styles.textQuote]}>
        "ให้คุณโฟกัสที่การขาย ลดความวุ่นวายเรื่องสต๊อก"
      </Text>

      <View style={{ flexDirection: "row" }}>
        <Button
          style={[
            { marginTop: 10, backgroundColor: "#000000", borderRadius: 5 },
          ]}
          textStyle={{ color: "#FFFFFF" }}
          href="/users"
        >
          เข้าสู่ระบบ
        </Button>
        <Button
          style={[
            { marginTop: 10, backgroundColor: "#e0e0e0", borderRadius: 5 },
          ]}
          href="signup"
        >
          สมัครสมาชิก
        </Button>
      </View>
    </View>
  );
};

export default IndexPage;
