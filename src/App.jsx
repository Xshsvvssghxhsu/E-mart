import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Products from './pages/Products';
import Navbar from './components/navbar';
import Searchbar from './components/Searchbar';
import NeedHelp from "./pages/needhelp";
import MyEmartAccount from './pages/MyEmartAccount';
import TermsAndConditions from './pages/TermsAndConditions';
import Cart from './pages/cart';
import PhonesTablets from './pages/PhonesTablets';
import Appliances from './pages/Appliances';
import Electronics from './pages/Electronics';
import Supermarket from './pages/Supermarket';
import HealthBeauty from './pages/HealthBeauty';
import HomeOffice from './pages/HomeOffice';
import WomenFashion from './pages/WomenFashion';
import MenFashion from './pages/MenFashion';
import Gaming from './pages/Gaming';
import BabyProducts from './pages/BabyProducts';
import Automobile from './pages/Automobile';
import SportingGoods from './pages/SportingGoods';
import ContactUs from './pages/ContactUs';
import LiveChat from './pages/LiveChat';
import PaymentOptions from './pages/PaymentOptions';
import DeliveryTimeline from './pages/DeliveryTimeline';
import TrackOrder from './pages/TrackOrder';
import CancelOrder from './pages/CancelOrder';
import CreateReturn from './pages/CreateReturn';
import Warranty from './pages/Warranty';
import AboutUs from './pages/AboutUs';




function App() {
  return (
     <div>
      <Navbar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/need-help" element={<NeedHelp />} />
        <Route path="/search" element={<Searchbar />} />
        <Route path="/my-emart-account" element={<MyEmartAccount />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/PhonesTablets" element={<PhonesTablets />} />
        <Route path="/Appliances" element={<Appliances />} />
        <Route path="/Electronics" element={<Electronics />} />
        <Route path="/Supermarket" element={<Supermarket />} />
        <Route path="/HealthBeauty" element={<HealthBeauty />} />
        <Route path="/HomeOffice" element={<HomeOffice />} />
        <Route path="/WomenFashion" element={<WomenFashion />} />
        <Route path="/MenFashion" element={<MenFashion />} />
        <Route path="/Gaming" element={<Gaming />} />
        <Route path="/BabyProducts" element={<BabyProducts />} />
        <Route path="/Automobile" element={<Automobile />} />
        <Route path="/SportingGoods" element={<SportingGoods />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/LiveChat" element={<LiveChat />} />
        <Route path="/PaymentOptions" element={<PaymentOptions />} />
        <Route path="/DeliveryTimeline" element={<DeliveryTimeline />} />
        <Route path="/TrackOrder" element={<TrackOrder />} />
        <Route path="/CancelOrder" element={<CancelOrder />} />
        <Route path="/CreateReturn" element={<CreateReturn />} />
        <Route path="/Warranty" element={<Warranty />} />
        <Route path="/AboutUs" element={<AboutUs />} />
      </Routes>
      </div>
  
  );
}

export default App;
