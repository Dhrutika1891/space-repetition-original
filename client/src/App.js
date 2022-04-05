import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import Listing from "./components/Listing/Listing";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Practise from "./components/Practice/Practise";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Listing />} />
          <Route path="/practice" element={<Practise />}></Route>
        </Routes>
      </div>
    </Provider>
  );
};

export default App;
