import React from "react";
import { useEffect, useState } from "react";
import AmplienceClient from "../../helpers/AmplienceClient";
import Footer from "./index";

const contentID = "c403d40c-311a-410b-b33a-833bfc6f9dbb";

const FooterData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchFooter() {
      const res = await AmplienceClient.getContentItemById(contentID);
      setData(res.body);
    //   console.log("Footer data : ",res.body)

    }
    fetchFooter();
  }, []);

  return data && <Footer data={data} />;
 
};

export default FooterData;
