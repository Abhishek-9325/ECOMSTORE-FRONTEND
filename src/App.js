import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Category from "./components/Category/Category";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import Newsletter from "./components/Footer/Newsletter/Newsletter";
import AppContext from "./utils/context";
import Header from "./components/header/Header";
import AllCategory from "./components/Category/AllCategory";
import SuccessOrder from "./components/Order/SuccessOrder";
import RejectedOrder from "./components/Order/RejectedOrder";
import PageNotFound from "./components/PageNotFound/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <AppContext>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:id" element={<Category />} />
          <Route path="/category" element={<AllCategory />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/order/success" element={<SuccessOrder />} />
          <Route path="/order/cancel" element={<RejectedOrder />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Newsletter />
        <Footer />
      </AppContext>
    </BrowserRouter>
  );
}

export default App;
