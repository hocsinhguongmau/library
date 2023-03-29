import { Routes as AppRoutes, Route } from 'react-router-dom'

import Home from '@/pages/Home'
import NotFound from '@/pages/NotFound'
import Catalog from '@/pages/Catalog'
import BookDetail from '@/pages/BookDetail/'
import Author from '@/pages/Author'
import CatalogDetail from '@/pages/CatalogDetail/CatalogDetail'
import AuthorDetail from '@/pages/AuthorDetail/AuthorDetail'
import Admin from '@/admin/pages/Admin/Admin'
import Layout from '@/components/Layout/Layout'
import Categories from '@/pages/Categories/Categories'
import CategoryDetail from '@/pages/CategoryDetail/CategoryDetail'
import Login from '@/pages/Login/'

const Routes = () => {
  return (
    <AppRoutes>
      <Route path="/admin" element={<Admin />} />
      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />

      <Route
        path="/catalog"
        element={
          <Layout>
            <Catalog />
          </Layout>
        }
      />
      <Route
        path="/author"
        element={
          <Layout>
            <Author />
          </Layout>
        }
      />
      <Route
        path="/book/:id"
        element={
          <Layout>
            <BookDetail />
          </Layout>
        }
      />
      <Route
        path="/catalog/:id"
        element={
          <Layout>
            <CatalogDetail />
          </Layout>
        }
      />
      <Route
        path="/author/:id"
        element={
          <Layout>
            <AuthorDetail />
          </Layout>
        }
      />
      <Route
        path="/categories"
        element={
          <Layout>
            <Categories />
          </Layout>
        }
      />
      <Route
        path="/category/:id"
        element={
          <Layout>
            <CategoryDetail />
          </Layout>
        }
      />
      <Route
        path="/login"
        element={
          <Layout>
            <Login />
          </Layout>
        }
      />
      <Route
        path="*"
        element={
          <Layout>
            <NotFound />
          </Layout>
        }
      />
    </AppRoutes>
  )
}

export default Routes
