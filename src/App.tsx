import RoutesApp from "./routes";
import UserProvider from "./contexts/userContext";

function App() {
  return (
    <UserProvider>
      <RoutesApp />
    </UserProvider>
  );
}

export default App;
