import ProductDetails from "../component/productslider/productslider";
import Home from "../pages/home";
import Ourcollectionproduct from "../component/ourcollectionproduct/ourcollectionproduct";
import Cartscrenn from "../component/cartscreen/cartscrenn";
import Login from "../component/login/login";
import Signup from "../component/login/signup";
// import Cart from "../component/cartpage/cartpage";
import CartAndPayment from "../component/cartpage/cartpage";
import Personalinformation from "../component/personalinformation/personalinformation";
import Featuredpost from "../component/blogpage/featuredpost";
import Privacypolicy from "../component/privacypolicy/privacypolicy";
import Neworder from "../component/neworder/neworder";
import Privacy from "../pages/Privacy";
import TermsofCondition from "../pages/TermsofCondition";
import Shipping from "../pages/Shipping";
import Returnpolicy from "../pages/returnpolicy";
import Securpayment from "../pages/securpayment";
import Custmerservice from "../pages/custmerservice";
import Contactus from "../pages/contactus";
import Careers from "../pages/carear";
import Areyoudesigner from "../pages/areyoudesigner";
import AboutUs from "../pages/aboutuspage";
import Cancellation from "../pages/cancellationpolicy";
import Orders from "../component/orders/Orders";
import Profile from "../component/profile/Profile";
import WishList from "../component/cartscreen/wishlist";

export const ROUTES = [
    {
        path: "/",
        component: <Home />,
    },
    {
        path: "/product/:productId",
        component: <ProductDetails />,
    },
    {
        path: "/ourcollection/:category",
        component: <Ourcollectionproduct />,
    },
    {
        path: "/cart/",
        component: <Cartscrenn />,
    },
    {
        path: "/wishlist/",
        component: <WishList />,
    },
    {
        path: "/orders/",
        component: <Orders />,
    },
    {
        path: "/login/",
        component: <Login />,
    },
    {
        path: "/signuppage/",
        component: <Signup />,
    },
    {
        path: "/cartpage/",
        component: <CartAndPayment />,
    },
    {
        path: "/personal/",
        component: <Personalinformation />,
    },
    {
        path: "/blog/",
        component: <Featuredpost />,
    },
    {
        path: "/privacypolicy/",
        component: <Privacypolicy />,
    },
    {
        path: "/orderpage/",
        component: <Neworder />,
    },
    {
        path: "/privacy/",
        component: <Privacy />,
    },
    {
        path: "/termofcondition/",
        component: <TermsofCondition />,
    },
    {
        path: "/shipping/",
        component: <Shipping />,
    },
    {
        path: "/returnpolicy/",
        component: <Returnpolicy />,
    },
    {
        path: "/securpayment/",
        component: <Securpayment />,
    },
    {
        path: "/customerservice/",
        component: <Custmerservice />,
    },
    {
        path: "/contactus/",
        component: <Contactus />,
    },
    {
        path: "/careers/",
        component: <Careers />,
    },
    {
        path: "/areyoudesigner/",
        component: <Areyoudesigner />,
    },
    {
        path: "/aboutus/",
        component: <AboutUs />,
    },
    {
        path: "/cancellation/",
        component: <Cancellation />,
    },
    {
        path: "/profile/",
        component: <Profile />,
    },

    {
        path: "*",
        component: (
            <div style={{ margin: "4rem", textAlign: "center", fontWeight: "bold" }}>
                404 PAGE NOT FOUND!
            </div>
        ),
    },
];

export const TABS = [
    {
        name: "Home",
        path: "/"
    },
    {
        name: "Girls",
        path: "/ourcollection/Girls"
    },
    {
        name: "Boys",
        path: "/ourcollection/Boys"
    },
    {
        name: "Twinning Sets",
        path: "/ourcollection/twinning-sets"
    },
]

export const MENU_ITEM = [
    {
        item: "Your Account",
        path: ""
    },
    {
        item: "Tracking Orde",
        path: ""
    },
    {
        item: "Free Catalog",
        path: ""
    },
    {
        item: "Profile Edit",
        path: ""
    },
    {
        item: "Personalize Design",
        path: ""
    },
    {
        item: "Custom Design",
        path: ""
    },
    {
        item: "Login & Security",
        path: "/login"
    },
]

export const SIZE_CHART = [
    {
        size: "0-6 Months",
        topLength: 7.5,
        chest: 18,
        bottomLength: 13,
        waist: 18
    },
    {
        size: "6-12 Months",
        topLength: 8,
        chest: 20,
        bottomLength: 15,
        waist: 19
    },
    {
        size: "1-2 Years",
        topLength: 9,
        chest: 22,
        bottomLength: 17,
        waist: 19.5
    },
    {
        size: "2-3 Years",
        topLength: 9.5,
        chest: 23,
        bottomLength: 21,
        waist: 20
    },
    {
        size: "3-4 Years",
        topLength: 10,
        chest: 23.5,
        bottomLength: 23,
        waist: 21
    },
    {
        size: "4-5 Years",
        topLength: 10.5,
        chest: 24.5,
        bottomLength: 25,
        waist: 22
    },
    {
        size: "5-6 Years",
        topLength: 11,
        chest: 25,
        bottomLength: 26,
        waist: 22.5
    },
    {
        size: "6-7 Years",
        topLength: 11.5,
        chest: 26.5,
        bottomLength: 28,
        waist: 23
    },
    {
        size: "7-8 Years",
        topLength: 12,
        chest: 27.5,
        bottomLength: 30,
        waist: 23.5
    },
    {
        size: "8-9 Years",
        topLength: 12.5,
        chest: 28.5,
        bottomLength: 32,
        waist: 24
    },
    {
        size: "9-10 Years",
        topLength: 13,
        chest: 30,
        bottomLength: 34,
        waist: 24.5
    },
    {
        size: "10-11 Years",
        topLength: 13.5,
        chest: 30.5,
        bottomLength: 35,
        waist: 25
    },
    {
        size: "11-12 Years",
        topLength: 14,
        chest: 31.5,
        bottomLength: 35,
        waist: 25.5
    },
    {
        size: "12-13 Years",
        topLength: 14.5,
        chest: 32.5,
        bottomLength: 36.5,
        waist: 26.5
    },
    {
        size: "13-14 Years",
        topLength: 15,
        chest: 33,
        bottomLength: 36.5,
        waist: 27.5
    },
    {
        size: "14-15 Years",
        topLength: 15.5,
        chest: 34,
        bottomLength: 37,
        waist: 30
    },
    {
        size: "Mothers - XS",
        topLength: 16,
        chest: 34,
        bottomLength: 38,
        waist: 30
    },
    {
        size: "Mothers - S",
        topLength: 16,
        chest: 36,
        bottomLength: 38,
        waist: 32
    },
    {
        size: "Mothers - M",
        topLength: 17,
        chest: 38,
        bottomLength: 39,
        waist: 34
    },
    {
        size: "Mothers - L",
        topLength: 17,
        chest: 40,
        bottomLength: 40,
        waist: 36
    },
    {
        size: "Mothers - XL",
        topLength: 18,
        chest: 42,
        bottomLength: 42,
        waist: 38
    },
    {
        size: "Mothers - XXL",
        topLength: 18,
        chest: 44,
        bottomLength: 42,
        waist: 40
    }
]
