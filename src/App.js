import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import "../index.css"
import Body from "./component/Body";
import Footer from "./component/Footer";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import About from "./component/About";
import Contact from "./component/Contact";
import Error from "./component/Error";


/* My Food App structure will look like this, 
            1) Header
                - Logo
                - Nav Items(right side)
                - Cart
            2) Body
                - Search bar
                - Restaurants List
                    - Restaurant card
                        - Image
                        - Name
                        - Rating
            3) Footer
                - Links
                - Copyrights
       
*/



const AppLayout=()=>{
  return(
    <div className="app">
    <Header/>
    <Outlet/>
    <Footer/>
    </div>
  )
};
const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[
      {
      path:"/",
      element:<Body/>,
      },
      {
        path:"/about",
        element:<About/>,
      },
      {
        path:"/contact",
        element:<Contact/> 
      }
    ],
    errorElement:<Error/>
  },
 
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);
