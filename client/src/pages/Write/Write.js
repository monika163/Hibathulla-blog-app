import { useHistory } from "react-router-dom";
import { Fragment } from "react";

import Form from "../../components/Form/Form";
// import { axiosInstance } from "../../config";
import axios from "axios";

const Write = () => {
  const history = useHistory();

  const fetchHandler = async (data) => {
    try {
      await axios.post("/api/posts", data);
      history.replace("/home");
    } catch {}
  };

  return (
    <Fragment>
      <Form onOrder={fetchHandler} />
    </Fragment>
  );
};

export default Write;
