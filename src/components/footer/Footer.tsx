import React from 'react';
import './Footer.scss';

export default function Footer() {
  return (
    <>
      <footer className="footer" data-testid="footer">
        <a className="footer__github" href="https://github.com/Disembow">
          {' '}
        </a>
        <div className="footer__year">2023</div>
        <a
          className="footer__rss"
          href="https://app.rs.school/registry/student?course=react-2023-q1"
        >
          {' '}
        </a>
      </footer>
    </>
  );
}
