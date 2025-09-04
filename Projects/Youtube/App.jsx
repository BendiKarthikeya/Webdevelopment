import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./src/HeaderComponent";
import FooterComponent from "./src/FooterComponent";
import BodyComponent from "./src/BodyComponent";
import ErrorComponent from "./src/ErrorComponent";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const AppRender = function () {
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <div>
            <HeaderComponent onSearch={setSearchQuery} />
            <Outlet context={{ searchQuery }} />
            <FooterComponent />
        </div>
    );
};

const routerPath = createBrowserRouter([
    {
        path: "/",
        element: <AppRender />,
        children: [
            {
                path: "/",
                element: <BodyComponent />
            }
        ],
        errorElement: <ErrorComponent />
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routerPath} />);


