import { useEffect, lazy, Suspense } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";

import Spinner from "./components/spinner/spinner-comp";

import { checkUserSession } from "./store/user/user-action";

const Navigation = lazy(() => import("./routes/navigation/navigation-comp"));
const Homepage = lazy(() => import("./routes/homepage/homepage-comp"));
const Authentication = lazy(() =>
  import("./routes/sign-in/authentication-page-comp")
);
const Shop = lazy(() => import("./routes/shop/shop-comp"));
const CheckOut = lazy(() => import("./routes/check-out/check-out-comp"));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession())
  }, []);

  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Homepage />} />
          <Route path="sign-in" element={<Authentication />} />
          <Route path="shop/*" element={<Shop />} />
          <Route path="checkout" element={<CheckOut />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
