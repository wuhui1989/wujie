import React from "react";
import { useNavigate } from "react-router-dom";
import WujieReact from "wujie-react";

const BoxPage = () => {
  const navigation = useNavigate();

  const props = {
    jump: (name: string) => {
      navigation(`/${name}`);
    },
  };

  return (
    <WujieReact
      name="app2"
      width="100%"
      height="100%"
      url="//localhost:7500/"
      props={props}
      alive={true}
    />
  );
};

export default BoxPage;
