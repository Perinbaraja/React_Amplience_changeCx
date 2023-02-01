import "./App.css";

import BottomBannerData from "./components/BottomBannerData";
import TopBannner from "./components/TopBannner";
import Header from "./components/Header";
import HeaderData from "./components/Header/HeaderData";

function App() {
  return (
    <div className="px-16">
      <HeaderData />
      <TopBannner />
    </div>
  );
}

export default App;
