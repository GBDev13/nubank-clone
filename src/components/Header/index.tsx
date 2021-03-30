
import { Container } from './styles';
import Link from 'next/link'
import MobileButton from '../MobileButton';
import { useState } from 'react';

import LoginIcon from '../../assets/login.svg';
import NuLogo from '../../assets/logo.svg';

function Header() {
  const [isActive, setIsActive] = useState(false);

  return (
    <Container>
      <nav>
        <div className="logo">
          <Link href="/">
            <a>
              <NuLogo />
            </a>
          </Link>
        </div>

        <div className={`navLinks ${isActive && 'active'}`}>
          <ul>
            <li>
              <a href="#" className="active">Início</a>
            </li>
            <li>
              <a href="#">Conta digital</a>
            </li>
            <li>
              <a href="#">Cartão de crédito</a>
            </li>
            <li>
              <a href="#">Pix <span>novo</span></a>
              
            </li>
            <li>
              <a href="#">Empréstimo</a>
            </li>
            <li>
              <a href="#">Conta PJ</a>
            </li>
            <li>
              <a href="#">Rewards</a>
            </li>
            <li>
              <a href="#">Seguros <span>novo</span></a>
            </li>
            <li>
              <a href="#">Sobre nós</a>
            </li>
            <li>
              <a href="#">Carreiras</a>
            </li>
          </ul>
          <div className="loginMobile">
            <a href="#">
              Login
              <LoginIcon />
            </a>
          </div>
        </div>

        <div className="fade" />

        <div className="loginDesk">
          <a href="#">
            Login
            <LoginIcon />
          </a>
        </div>

        <MobileButton onClick={e => e} isActive={isActive} setIsActive={setIsActive}/>
      </nav>
    </Container>
  );
};

export default Header;
