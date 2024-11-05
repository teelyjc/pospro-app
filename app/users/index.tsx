import { Button } from "@/components/Button";
import { fetch } from "@/libs/fetch";
import { styles } from "@/styles/styles";
import { Response } from "@/types/response";
import { User } from "@/types/user";
import { UserUtils } from "@/utils/users";
import { useRouter } from "expo-router";
import { FunctionComponent, useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

const Users: FunctionComponent = () => {
  const [users, setUsers] = useState<User[]>([]);
  const router = useRouter();

  useEffect(() => {
    fetch.get<Response<{ users: User[] }>>("/users").then((response) => {
      const response_users = response.data.data?.users;

      response_users && setUsers([...response_users]);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Button
        href="/"
        textStyle={[{ fontSize: 15 }, styles.font]}
        style={{ borderWidth: 0.8, borderRadius: 13 }}
      >
        กลับหน้าแรก
      </Button>

      {users.map((user) => {
        return (
          <TouchableOpacity
            key={user.id}
            style={{
              borderWidth: 0.8,
              maxWidth: "80%",
              width: "100%",
              margin: "auto",
              padding: 10,
              borderRadius: 14,
              borderStyle: "solid",
              marginBottom: 5,
              marginTop: 15,
              flexDirection: "row",
            }}
            onPress={() => router.push(`/users/${user.id}`)}
          >
            <Image
              source={UserUtils.getUserProfile(user)}
              style={{ width: 80, height: 80, borderRadius: 100 }}
            />
            <Text
              style={{
                marginVertical: "auto",
                marginLeft: 15,
                textAlign: "left",
              }}
            >
              {user.firstname
                ? `${user.firstname} ${user.lastname}`
                : user.username}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default Users;
