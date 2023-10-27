import { ROUTES } from '@constants/routes';
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import mainLogo from '@assets/img/main-logo.svg';
import classNames from 'classnames';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Button } from '..';

export default function Header({ children }): JSX.Element {
  const navItems = [
    { label: 'Home', link: ROUTES.HOME },
    { label: 'Courses', link: ROUTES.COURSE },
    { label: 'E-books', link: ROUTES.EBOOK },
    { label: 'Contact us', link: ROUTES.COBTACTUS },
  ];

  return (
    <div>
      <nav className="fixed z-50 h-auto w-full bg-backGround ">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center justify-between py-2 ">
            <ReactSVG className="py-8" src={mainLogo} />
            <div className="flex items-center gap-x-5 text-white">
              <Button>Login</Button>
              or
              <Button>Sign Up</Button>
            </div>
          </div>
        </div>
        <div className=" bg-navGray ">
          <div className="mx-auto flex max-w-7xl items-center justify-between">
            <div className="flex gap-x-10 py-4">
              {navItems.map((item) => (
                <NavLink
                  to={item.link}
                  key={item.label}
                  className={({ isActive }): string =>
                    classNames(
                      ' cursor-pointer font-medium ',
                      'hover:text-main',
                      { ' text-main': isActive },
                      { ' text-white': !isActive }
                    )
                  }>
                  {item.label}
                </NavLink>
              ))}
            </div>
            <button type="button" className="flex items-center gap-x-2 text-white">
              <AiOutlineShoppingCart size={30} />
              <p>Cart</p>
            </button>
          </div>
        </div>
      </nav>
      {children}
    </div>
  );
}
