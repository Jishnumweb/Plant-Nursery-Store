import {
  createBrowserRouter
} from "react-router-dom";
import Userlayout from "../layoutes/Userlayout";
import Homepage from "../components/pages/Homepage";
import Productpage from "../components/pages/Productpage";
import Checkoutpage from "../components/pages/Checkoutpage";
import Orderpage from "../components/pages/Ordepage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Userlayout />,
    children: [{
      path: "",
      element: <Homepage />
    },
    {
      path: "/product",
      element:<Productpage/>
    },{
      path:"/checkout",
      element:<Checkoutpage/>
    },
    {
      path:"/order",
      element:<Orderpage/>
    }
  ]
  },
]);