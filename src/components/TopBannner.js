import React from "react";
import { useEffect, useState } from "react";
import { ContentClient } from "dc-delivery-sdk-js";
import Banner from "./Banner";

const client = new ContentClient({
  hubName: "changecxdemo",
});
const contentID = "7aa84281-f904-4e75-bd58-1c1cbe29ed20";

const TopBannner = () => {
  const [banner, setBanner] = useState(null);

  useEffect(() => {
    async function fetchBanner() {
      const banner = await client.getContentItemById(contentID);

      setBanner(banner.body);
    }

    fetchBanner();
  }, []);

  console.log("banner", banner);
  return banner && <Banner {...banner} />;
};

export default TopBannner;
