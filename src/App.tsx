import { AuthProvider } from "./context/authContext";
import Router from "./router";

function App() {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
}

export default App;
