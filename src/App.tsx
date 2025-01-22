import { Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import Dashboard from "./pages/Dashboard";
import ProductDetails from "./pages/ProductDetails";
import NotFound from "./pages/NotFound";
import { ErrorBoundary } from "react-error-boundary";
import ErrorBoundaryFallback from "./components/ErrorBoundaryFallback";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ErrorBoundary FallbackComponent={ErrorBoundaryFallback}>
          <div className="App">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/products/:id" element={<ProductDetails />} />

              {/* 404 page added for unallowed routes */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </ErrorBoundary>
      </PersistGate>
    </Provider>
  );
}

export default App;
