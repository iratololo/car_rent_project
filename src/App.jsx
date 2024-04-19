import { Navigate, Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from "react";

import Layout from "./layout/Layout";
import { Loader } from "components/reuse/Loader/Loader";
import Error from "components/reuse/Error/Error";

const Home = lazy(() => import("pages/Home/Home"));
const Catalog = lazy(() => import("pages/Catalog/Catalog"));
const Favorites = lazy(() => import("pages/Favorites/Favorites"));

function App() {
  return (
    <>
      <Loader />
      <Error />
      <Suspense >
        <Routes>
          <Route path="/" element={<Layout />}>
              <Route index element={<Home />}/>
              <Route path="/catalog" element={<Catalog />} />
              <Route path="/favorites" element={<Favorites />} />
          </Route>
        <Route path="*" element={<Navigate to="/"/>} />
      </Routes>
    </Suspense>
    </>
  );
}
export default App;
