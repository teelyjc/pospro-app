import { Button } from "@/components/Button";
import { styles } from "@/styles/styles";
import { Fragment, FunctionComponent, useEffect, useState } from "react";
import { View, Text, Image } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { fetch } from "@/libs/fetch";
import { Response } from "@/types/response";
import { User } from "@/types/user";
import { UserUtils } from "@/utils/users";

const UserById: FunctionComponent = () => {
  const { id } = useLocalSearchParams();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    fetch.get<Response<{ user: User }>>(`/users/${id}`).then((res) => {
      const user = res.data.data?.user;
      user && setUser(user);
    });
  }, [id]);

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          margin: "auto",
          width: "50%",
        }}
      >
        <Button
          href="/users"
          style={{ borderWidth: 0.8, borderRadius: 13 }}
          textStyle={[{ fontSize: 15 }, styles.font]}
        >
          กลับ
        </Button>
        <Button
          href="/"
          textStyle={[{ fontSize: 15 }, styles.font]}
          style={{ borderWidth: 0.8, borderRadius: 13, marginLeft: 15 }}
        >
          กลับหน้าแรก
        </Button>
      </View>
      {user ? (
        <Fragment>
          <Text
            style={[
              styles.font,
              styles.textCenter,
              { marginTop: 10, fontSize: 30 },
            ]}
          >
            {user.firstname
              ? `${user.firstname} ${user.lastname}`
              : `${user.username}`}
          </Text>
          <Image
            source={UserUtils.getUserProfile(user)}
            style={{
              width: 150,
              height: 150,
              borderRadius: 100,
              marginHorizontal: "auto",
              marginTop: 25,
            }}
          />
        </Fragment>
      ) : (
        <Text>ไม่พบข้อมูลผู้ใช้งาน</Text>
      )}
    </View>
  );
};

export default UserById;
