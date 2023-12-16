import { Container,Nav,Navbar} from 'react-bootstrap';
import {  NavLink } from 'react-router-dom';
import  i18n from 'i18next';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLanguage } from '@fortawesome/free-solid-svg-icons'
let handelLanguage=()=>{
  i18n.changeLanguage(i18n.language==="en"?"ar":"en")
}

export default function SiteNav() {
  const {t}=useTranslation();
  return (
    <Navbar expand="md" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="#home">{t('Final project')}</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <NavLink to="/" className="nav-link">{t('Home')}</NavLink>
          <NavLink to="/about" className="nav-link">{t('About')}</NavLink>
          <NavLink to="/redux_example" className="nav-link">{t('ReduxExample')}</NavLink>
          <NavLink to="/products" className="nav-link">{t('Products')}</NavLink>
         
        </Nav>
        <Nav>
          <FontAwesomeIcon icon={faLanguage}
          onClick={handelLanguage}
          className=''
          size='4x'
          />
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
