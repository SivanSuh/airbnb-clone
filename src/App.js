import React from "react";
import "./App.css";
import Navbar from "./Navbar/Navbar";
import FirstMain from "./FirstMain/FirstMain";
import LastMain from "./LastMain/LastMain";
import Footer from "./Footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home/Home";
import SearchPage from "./SearchPage/SearchPage";

function App() {
  return (
    <div className="App">
      <Router>
        {/* Switch start */}

        <Switch>
          <Route path="/search" exact>
            <SearchPage />
          </Route>
          <Route path="/">
            <div className="dark-theme">
              COVID-19 çerçevesinde aldığımız önlemler hakkındaki en güncel
              bilgileri öğrenin
            </div>
            <Navbar />
            <div className="title">
              <h2 style={{ color: "goldenrod" }}>Dilediğiniz yerde yaşayın</h2>
            </div>

            <div className="firts_Main">
              <FirstMain
                img="https://a0.muscache.com/im/pictures/2f13349d-879d-43c6-83e3-8e5679291d53.jpg?im_w=320"
                image="image"
                name="Dogada Kacamak"
              />
              <FirstMain
                img="https://a0.muscache.com/im/pictures/36f53e61-db8d-403c-9122-5b761c0e4264.jpg?im_w=320"
                image="benzersiz konaklama"
                name="Benzersiz Kacamak"
              />
              <FirstMain
                img="https://a0.muscache.com/im/pictures/7d82ca14-56e5-4465-8218-dcfa7d69b6ac.jpg?im_w=320"
                image="tamamı rezerve edilen evler"
                name="Tamamı rezerve edilen evler"
              />
            </div>
            <div className="description">
              <div>
                <h1 style={{ color: "gold" }}>Yapılacak Şeyleri Keşfedin</h1>
              </div>
              <div className="desc">
                <LastMain
                  picture="https://a0.muscache.com/im/pictures/ad109d56-2421-40cd-98e6-e114160dc85b.jpg?im_w=320"
                  picture_name="dolly"
                  desc="Deneyimler"
                  description="yakınlarınızla unutulmaz etkinliklerde bulunun"
                />
                <LastMain
                  picture="https://a0.muscache.com/im/pictures/0ce799cb-7553-4369-be9e-d0011e0ef636.jpg?im_w=320"
                  picture_name="chat"
                  desc="Çevrim içi deneyimler"
                  description="Ev sahiplerinin yönetimine canlı  ve etkileşimli etkinlikler"
                />
                <LastMain
                  picture="https://a0.muscache.com/im/pictures/247a1ea3-946d-4eb8-a6ab-e8b9a66846f4.jpg?im_w=320"
                  desc="One Çıkan Koleksiyon: Seyahat Tutkusu"
                  picture_name="one cıkan"
                  description="Çevrim içi deneyimler ile evinizden çıkmadan deneyimleyin"
                />
              </div>
            </div>
          </Route>
        </Switch>

        {/*Switch end */}

        <Footer />
      </Router>
    </div>
  );
}

export default App;
