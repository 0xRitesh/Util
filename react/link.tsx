import { Link as GatsbyLink } from 'gatsby';
import React from 'react';

interface Props {
  to: string;
  rel?: string;
  className?: string;
  style?: React.CSSProperties;
  ariaLabel?: string;
  handleClick?: () => void;
}

const Link: React.FC<Props> = ({ to, className, children, style, rel, ariaLabel, handleClick }) =>
  /^http/.test(to) ? (
    <a
      aria-label={ariaLabel}
      className={className}
      href={to}
      rel="noopener noreferrer"
      style={style}
      target="_blank"
      onClick={handleClick}
    >
      {children}
    </a>
  ) : (
    <GatsbyLink
      aria-label={ariaLabel}
      className={className}
      rel={rel}
      style={style}
      to={to}
      onClick={handleClick}
    >
      {children}
    </GatsbyLink>
  );

export default Link;
