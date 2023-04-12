import { BrowserRouter, Route, Routes } from "react-router-dom";
import LogIn from "./pages/Auth/LogIn";
import SignUp from './pages/Auth/SignUp';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/logIn" element={<LogIn />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
