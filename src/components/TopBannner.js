import React from "react";
import { useEffect, useState } from "react";
import Banner from "./Banner";
import AmplienceClient from "../helpers/AmplienceClient";

const contentID = "7aa84281-f904-4e75-bd58-1c1cbe29ed20";

const TopBannner = () => {
  const [banner, setBanner] = useState(null);

  useEffect(() => {
    async function fetchBanner() {
      const res = await AmplienceClient.getContentItemById(contentID);
      const res2 = await AmplienceClient.getContentItemById("7e98abe3-ae09-42a3-9d76-6994f6b55fd7");
      console.log("header data : ",res2.body)
      setBanner(res.body);
    }

    fetchBanner();
  }, []);
  return banner && <Banner data={banner} />;
};

export default TopBannner;
