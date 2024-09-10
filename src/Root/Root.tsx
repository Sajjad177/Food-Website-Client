import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="flex flex-col min-h-screen m-2 md:m-0">

      <header>
        <NavBar />
      </header>
      {/* Main content */}
      <div className="flex-1">
        <Outlet/>
      </div>
      {/* footer */}
      <footer>
        <Footer/>
      </footer>
    </div>
  );
};

export default Root;
