import "./App.css";

import BottomBannerData from "./components/BottomBannerData";
import TopBannner from "./components/TopBannner";
import Header from "./components/Header";
import HeaderData from "./components/Header/HeaderData";
import FooterData from "./components/footer/FooterData";

function App() {
  return (
    <div className="px-16">
      <HeaderData />
      <TopBannner />
      <BottomBannerData />
      <FooterData/>
    </div>
  );
}

export default App;
