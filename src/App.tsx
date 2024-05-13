import Providers from "./components/Providers";
import AppRoutes from "./components/AppRoutes";
import ErrorBoundary from "./components/ErrorBoundary";
import ErrorPage from "./scenes/ErrorPage";

function App() {
  return (
    <ErrorBoundary fallbackComponent={<ErrorPage />}>
      <Providers>
        <AppRoutes />
      </Providers>
    </ErrorBoundary>
  );
}

export default App;
