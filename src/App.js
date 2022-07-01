import { Route, Routes } from "react-router-dom";
import AllCompletedTasks from "./components/AllCompletedTasks/AllCompletedTasks";

import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import MyCalender from "./components/MyCalendar/MyCalender";
import Navbar from "./components/Navbar/Navbar";
import ToDo from "./components/ToDo/ToDo";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/todo" element={<ToDo />} />
        <Route path="/completedTasks" element={<AllCompletedTasks />} />
        <Route path="/calender" element={<MyCalender />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
