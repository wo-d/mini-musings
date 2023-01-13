import { style } from '@vanilla-extract/css';

export const container = style({
  margin: 'auto',
  maxWidth: '600px',
  fontFamily: 'sans-serif',
});

export const siteTitle = style({
  fontSize: '4rem',
  fontWeight: 700,
  margin: '2rem 0',
});

export const navLinks = style({
  display: 'flex',
  listStyle: 'none',
  paddingLeft: 0,
});

export const navLinkItem = style({
  paddingRight: '2rem',
});
