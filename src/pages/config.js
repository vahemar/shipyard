import Home from "./Home";
import Content from "./Content";
import Calculation from "./Calculation";
import DefaultLayout from "../layouts/DefaultLayout";
import ContentLayout from "../layouts/ContentLayout";
import CalculationLayout from "../layouts/CalculationLayout";

export const config = [
    {
        element: <Home />,
        path: '/',
        Layout: DefaultLayout
    },
    {
        element: <Content />,
        path: '/content',
        Layout: ContentLayout
    },
    {
        element: <Calculation />,
        path: '/calculation',
        Layout: CalculationLayout
    }
];