import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import WujieReact from "wujie-react";
import { hostMap } from "../hostMap";

const TestPage: FC = () => {
  const navigation = useNavigate();

  const props = {
    jump: (name: string) => {
      navigation(`/${name}`);
    },
  };

  return (
      <WujieReact
        name="app1"
        url={"//localhost:6900/"}
        width="100%"
        height="100%"
        alive={true}
        props={props}
      ></WujieReact>
  );
};

export default TestPage;
