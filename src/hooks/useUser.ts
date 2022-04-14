import { useSelector } from "react-redux";

import { StoreState } from "../modules";

export const useUser = () => {
  const { isLogin, user } = useSelector((state: StoreState) => state.authState);

  return { isLogin, user };
};
