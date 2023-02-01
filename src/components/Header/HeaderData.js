import React from "react";
import { useEffect, useState } from "react";
import AmplienceClient from "../../helpers/AmplienceClient";
import Header from "./index";

const contentID = "7e98abe3-ae09-42a3-9d76-6994f6b55fd7";

const HeaderData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchHeader() {
      const res = await AmplienceClient.getContentItemById(contentID);
      setData(res.body);
      console.log("header data : ",res.body)

    }
    fetchHeader();
  }, []);

  return data && <Header data={data} />;
 
};

export default HeaderData;
