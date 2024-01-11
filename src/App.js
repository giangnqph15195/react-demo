import './App.css';
import { Route, Routes } from 'react-router-dom';
import Weblayout from './layouts/weblayout';
import Home from './routes/pages/Home';
import Notfound from './layouts/Notfound';
import BlogsHook from './hook/BlogHook';
import React from 'react';
import ListBlog from './routes/compoment/ListBlog';


// const LazyHome = React.lazy(() => { import('./pages/Home') })
// const LazyBlog = React.lazy(() => { import('./pages/Blog') })
// const LayzyTable= React.lazy(()=>{import('./pages/compoment/Table')})
// const LazyListBlog = React.lazy(()=>{import('./pages/compoment/ListBlog')})
// const LazyListUser = React.lazy(()=>{import('./pages/compoment/ListUser')})

function App() {
  const {data} = BlogsHook()
  return (
    <div className="App">
      <React.Suspense fallback="Loading...">
        <Routes>
          <Route path='/' element={<Weblayout />}>
            <Route index element={<Home blogs={data} />}></Route>
            <Route path='blog' element={<ListBlog  blogs={data}/>}></Route>
          </Route>
          <Route path='*' element={<Notfound/>}></Route>
        </Routes>
      </React.Suspense>
    </div>
  );
}

export default App;
