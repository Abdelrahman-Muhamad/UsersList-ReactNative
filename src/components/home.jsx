import {
  Box,
  Text,
  Input,
  Heading,
  FlatList,
  HStack,
  InfoIcon,
} from "native-base";
import { useContext, useEffect } from "react";
import { usersContext } from "../context";
import { getUsersList } from "../actions";
import { getSearchedUsers } from "../actions";
export const Home = ({ navigation }) => {
  const { state, dispatch } = useContext(usersContext);

  const resolve = async () => {
    dispatch(await getUsersList());
  };
  useEffect(() => {
    resolve();
  }, []);

  return (
    <Box>
      <Heading style={{ margin: 10, textAlign: "center" }}>Users</Heading>
      <Input
        mx="3"
        placeholder="Search"
        w="95%"
        onChangeText={async (e) => {
          if (e.length >= 3) {
            await dispatch(await getSearchedUsers(e));
          } else if (e == "") {
            resolve();
          }
        }}
      />
      <FlatList
        data={state.users.list || []}
        renderItem={({ item }) => {
          return (
            <Box
              borderBottomWidth="1"
              _dark={{
                borderColor: "cyan.600",
              }}
              borderColor="cyan.700"
              pl="5"
              pr="5"
              py="4"
            >
              <HStack style={{ justifyContent: "space-between" }}>
                <Text>{item.name}</Text>
                <InfoIcon
                  onPress={() => {
                    navigation.navigate("Profile", { id: item.id });
                  }}
                />
              </HStack>
            </Box>
          );
        }}
        keyExtractor={(item) => item.id}
      />
    </Box>
  );
};
