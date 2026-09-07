import { createBrowserRouter } from "react-router";
import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/HomePage";
import TodolistPage from "./pages/TodolistPage";
import ErrorPage from "./pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />, // โครงหน้า
    errorElement: <ErrorPage/>,
    children: [
      { index: true, element: <HomePage /> }, // "/" -> HomePage อยู่ใน <Outlet/> ของ MainLayout
    ],
  },
  {
    path: "/my",
    element: <MainLayout />,
    errorElement: <ErrorPage/>,
    children: [
      { path: "todolistpage", element: <TodolistPage /> },  // จะเปิดใช้ที่ STEP 8
    ],
  },
]);
