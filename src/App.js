import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { Routes, Route } from "react-router-dom";

import Navigation from "./routes/navigation/navigation-comp";
import Homeage from "./routes/homepage/homepage-comp";
import Authentication from "./routes/sign-in/authentication-page-comp";
import Shop from "./routes/shop/shop-comp";
import CheckOut from "./routes/check-out/check-out-comp";

import {
  AuthChangeListener,
  createUserDocument,
} from "./utils/firebase/firebase-utils";
import { setCurrentUser } from "./store/user/user-action";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubcribe = AuthChangeListener((user) => {
      
      if (user) {
        createUserDocument(user);
      }
      dispatch(setCurrentUser(user));
      
    });

    return unsubcribe;
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Homeage />} />
        <Route path="sign-in" element={<Authentication />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="checkout" element={<CheckOut />} />
      </Route>
    </Routes>
  );
};

export default App;
