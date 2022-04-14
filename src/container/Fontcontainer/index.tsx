import { fontData } from "lib/fontData";
import { StoreState } from "modules";
import React from "react";
import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
// import { getFontDataAction } from "modules/font";
import { MainCard } from "../../components/Cards/MainCard/index";

export const Fontcontainer = () => {
  const data = useSelector((state: StoreState) => state.fontState);
  console.log(data);

  const fontDatas = fontData;

  // const dispatch = useDispatch();

  // const handleGetFont = useCallback(() => {
  //   dispatch(getFontDataAction.request());
  // }, [dispatch]);

  return (
    <div>
      <div onClick={() => console.log(fontDatas)}>Sibal Jjom Na Wa</div>
      <MainCard data={fontDatas} />
    </div>
  );
};
