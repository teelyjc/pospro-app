import { User } from "@/types/user";
import { ImageSourcePropType } from "react-native";

export class UserUtils {
  public static getUserProfile(user: User): ImageSourcePropType {
    if (user.profilePath) {
      return {
        uri: `https://pospro.teelyjc.dev/uploads` + `${user.profilePath}`,
      };
    }

    return require("@/assets/boy.png");
  }
}
