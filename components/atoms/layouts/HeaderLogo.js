import React from 'react'
import { jsx, Image } from 'theme-ui';
import { Link } from '../../molecules/HeaderNavLink.js';

export const HeaderLogo = ({ src, ...rest }) => {
  return (
   <Link
      path="/"
      sx={{ variant: 'links.logo', display: 'flex', cursor: 'pointer', mr: 15 }}
      {...rest}
    >
      <Image src={src} alt="nextjs landing page logo" />
    </Link>
  );
}
