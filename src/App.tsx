import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header, NotifiersProvider, SidebarProvider, UserProvider } from 'src/entities'
import { routes } from './proccess'
import { DropdownsProvider } from 'src/proccess/api-hooks'

const Sidebar = React.lazy(() => import('src/entities/Sidebar/Sidebar'))
const Games = React.lazy(() => import('src/pages/Games'))
const Live = React.lazy(() => import('src/pages/Live'))
const Tournaments = React.lazy(() => import('src/pages/Tournaments'))
const Media = React.lazy(() => import('src/pages/Media'))
const Index = React.lazy(() => import('src/pages/Index'))

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <NotifiersProvider>
          <DropdownsProvider>
            <SidebarProvider>
              <Header />
              <React.Suspense>
                <Sidebar />
              </React.Suspense>
            </SidebarProvider>
          </DropdownsProvider>
        </NotifiersProvider>
      </UserProvider>
      <Routes>
        <Route
          path={routes.games.path}
          element={
            <React.Suspense>
              <Games />
            </React.Suspense>
          }
        />
        <Route
          path={routes.live.path}
          element={
            <React.Suspense>
              <Live />
            </React.Suspense>
          }
        />
        <Route
          path={routes.tournaments.path}
          element={
            <React.Suspense>
              <Tournaments />
            </React.Suspense>
          }
        />
        <Route
          path={routes.media.path}
          element={
            <React.Suspense>
              <Media />
            </React.Suspense>
          }
        />
        <Route
          path="*"
          element={
            <React.Suspense>
              <Index />
            </React.Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
