import { FunctionComponent, PropsWithChildren } from 'react'

// Components
import NavbarComponent from './NavbarComponent'
import FooterComponent from './FooterComponent'

const Layout: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <NavbarComponent />
      {children}
      <FooterComponent />
    </>
  )
}

export default Layout
