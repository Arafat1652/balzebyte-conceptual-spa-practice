
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import React from 'react';
import MainLayOut from './MainLayOut/MainLayOut.jsx';
import Home from './Pages/Home.jsx';
import Blogs from './Pages/Blogs.jsx';
import BookMarks from './Pages/BookMarks.jsx';
import BlogDetail from './component/BlogDetail/BlogDetail.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    children:[
    {
      path: '/',
      element: <Home></Home>,
    },
    {
      path: '/blogs',
      element: <Blogs></Blogs>,
      loader: ()=>fetch('https://dev.to/api/articles?per_page=20&top=20')
    },
    {
      path: '/blog/:id',
      element: <BlogDetail></BlogDetail>,
      loader: ({params})=>fetch(`https://dev.to/api/articles/${params.id}`)
    },
    {
      path: '/bookmarks',
      element: <BookMarks></BookMarks>
    }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
</React.StrictMode>,
)
