import { LinkingOptions } from "@react-navigation/native";
import * as Linking from "expo-linking";

import { RootStackParamList } from "./types";

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.createURL("/")],
  config: {
    screens: {
      Root: {
        screens: {
          MenuScreen: {
            screens: {
              MenuScreen: "menu",
            },
          },
          BasketScreen: {
            screens: {
              BasketScreen: "basket",
            },
          },
        },
      },
    },
  },
};

export default linking;
