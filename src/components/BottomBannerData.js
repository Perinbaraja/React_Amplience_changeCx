import React from "react";
import { useEffect, useState } from "react";

import AmplienceClient from "../helpers/AmplienceClient";
import BottomBanner from "./bottomBanner";

const contentID = "b3f75c53-3b06-44ad-90ab-1fb3d4394916";

const BottomBannerData = () => {
  const [btBanner, setBtBanner] = useState(null);

  useEffect(() => {
    async function fetchBanner() {
      const res = await AmplienceClient.getContentItemById(contentID);

      setBtBanner(res.body);
    }

    fetchBanner();
  }, []);
  console.log("banner", btBanner);
  return btBanner && <BottomBanner data={btBanner} />;
};

export default BottomBannerData;
