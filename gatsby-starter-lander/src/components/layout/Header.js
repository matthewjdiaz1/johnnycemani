import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import LogoIcon from '../../svg/LogoIcon';
import Button from '../Button';

const Header = () => (
  <header className="sticky top-0 bg-primary shadow">
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
      <div className="flex items-center text-2xl">
        <div className="w-12 mr-3">
          <LogoIcon />
        </div>
        Johnny Cemani
      </div>
      <div className="flex mt-4 sm:mt-0">
        <AnchorLink className="px-4 text-bg-darker" href="#About">
          About
        </AnchorLink>
        <AnchorLink className="px-4 text-bg-darker" href="#Chickens">
          Available Chickens
        </AnchorLink>
        <AnchorLink className="px-4 text-bg-darker" href="#Eggs">
          Available Eggs
        </AnchorLink>
        {/* <AnchorLink className="px-4" href="#Testimonials">
          Testimonials
        </AnchorLink>
        <AnchorLink className="px-4" href="#Purchase">
          Purchase
        </AnchorLink> */}
      </div>
      {/* <div className="hidden md:block">
        <Button className="text-sm">Start Free Trial</Button>
      </div> */}
    </div>
  </header>
);

export default Header;
