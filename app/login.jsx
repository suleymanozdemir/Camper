import { SafeAreaView, React } from "react-native";
import LoginScreen from "../screens/LoginScreen";

const Login = () => {
  return (
    <>
      <SafeAreaView className="bg-white flex-1 px-40 flex-column">
        <LoginScreen />
      </SafeAreaView>
    </>
  );
};

export default Login;
