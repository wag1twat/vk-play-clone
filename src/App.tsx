import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import theme from 'src/theme'
import { Fonts } from 'src/theme/Fonts'
import { Header, NotifiersProvider, SidebarProvider } from 'src/entities'
import { routes } from './proccess'
import { PageLayout } from './shared/Layout'
import { DropdownsProvider } from 'src/proccess/api-hooks'

const Sidebar = React.lazy(() => import('src/entities/Sidebar/Sidebar'))
const Games = React.lazy(() => import('src/pages/Games'))
const Live = React.lazy(() => import('src/pages/Live'))
const Tournaments = React.lazy(() => import('src/pages/Tournaments'))
const Media = React.lazy(() => import('src/pages/Media'))
const Index = React.lazy(() => import('src/pages/Index'))

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <BrowserRouter>
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
        <PageLayout>
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
        </PageLayout>
      </BrowserRouter>
    </ChakraProvider>
  )
}

export default App
