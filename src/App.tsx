import { Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import Dashboard from "./pages/Dashboard";
import ProductDetails from "./pages/ProductDetails";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/products/:id" element={<ProductDetails />} />

            {/* 404 page added for unallowed routes */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
