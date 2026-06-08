import React from 'react';
import styled from 'styled-components';

import { contact } from '../cvData';
import mailIcon from 'assets/windowsIcons/mail.png';
import locationIcon from 'assets/windowsIcons/676(32x32).png';
import linkedinIcon from 'assets/windowsIcons/896(16x16).png';
import githubIcon from 'assets/github-logo.png';

const rows = [
  {
    icon: mailIcon,
    label: 'E-mail',
    value: contact.email,
    href: `mailto:${contact.email}`,
  },
  {
    icon: linkedinIcon,
    label: 'LinkedIn',
    value: contact.linkedin.label,
    href: contact.linkedin.url,
    external: true,
  },
  {
    icon: githubIcon,
    label: 'GitHub',
    value: contact.github.label,
    href: contact.github.url,
    external: true,
  },
  {
    icon: locationIcon,
    label: 'Location',
    value: contact.location,
  },
];

function Contact({ onClose }) {
  return (
    <Div>
      <div className="contact__top">
        <div className="contact__intro">
          Get in touch — I'm always happy to chat about new opportunities.
        </div>
        <div className="contact__rows">
          {rows.map(row => (
            <div key={row.label} className="contact__row">
              <img className="contact__row__icon" src={row.icon} alt="" />
              <div className="contact__row__label">{row.label}</div>
              {row.href ? (
                <a
                  className="contact__row__value link"
                  href={row.href}
                  {...(row.external
                    ? { target: '_blank', rel: 'noreferrer' }
                    : {})}
                >
                  {row.value}
                </a>
              ) : (
                <div className="contact__row__value">{row.value}</div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="contact__bottom">
        <div onClick={onClose} className="contact__button">
          <span>OK</span>
        </div>
      </div>
    </Div>
  );
}

const Div = styled.div`
  background-color: #f5f5f5;
  width: 100%;
  height: 100%;
  font-size: 11px;
  padding: 14px;
  display: flex;
  flex-direction: column;

  .contact__top {
    flex: 1;
  }
  .contact__intro {
    line-height: 16px;
    margin-bottom: 14px;
  }
  .contact__rows {
    display: flex;
    flex-direction: column;
  }
  .contact__row {
    display: flex;
    align-items: center;
    height: 28px;
  }
  .contact__row__icon {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
  .contact__row__label {
    width: 70px;
    font-weight: 700;
    color: #0c327d;
  }
  .contact__row__value {
    color: #222;
  }
  .contact__row__value.link {
    color: #0a55c4;
    text-decoration: none;
  }
  .contact__row__value.link:hover {
    text-decoration: underline;
  }
  .contact__bottom {
    display: flex;
    width: 100%;
    justify-content: center;
    padding-top: 10px;
  }
  .contact__button {
    min-width: 80px;
    height: 22px;
    padding: 0 12px;
    display: flex;
    border: 1px solid black;
    justify-content: center;
    align-items: center;
    box-shadow: inset -1px -1px 1px black;
    &:hover:active {
      box-shadow: inset 1px 1px 1px black;
      & > * {
        transform: translate(1px, 1px);
      }
    }
  }
`;

export default Contact;
