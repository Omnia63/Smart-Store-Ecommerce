import { useDispatch } from "react-redux";
import AppNavbar from "./Components/AppNavbar";
import AppRoutes from "./routes/AppRoutes";
import ScrollToTop from "./routes/ScrollToTop";
import { useEffect } from "react";
import { getCurrentUser } from "./Redux-toolkit/Slices/auth-slice";
import AppFooter from "./Components/AppFooter";

function App() {
    const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);
  
  return (
    <div className="App">  
        <AppNavbar />
        <ScrollToTop />
        <AppRoutes />
        <AppFooter />
    </div>
  );
}

export default App;
