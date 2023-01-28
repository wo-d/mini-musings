import { style } from '@vanilla-extract/css';

export const container = style({
  margin: 'auto',
  maxWidth: '600px',
  fontFamily: 'Open Sans',
});

export const siteTitle = style({
  fontSize: '3rem',
  color: 'grey',
  fontWeight: 700,
  margin: '3rem 0',
});

export const heading = style({
  color: 'rebeccapurple',
});

export const navLinks = style({
  display: 'flex',
  listStyle: 'none',
  paddingLeft: 0,
});

export const navLinkItem = style({
  paddingRight: '2rem',
});

export const navLinkText = style({
  color: 'black',
});
