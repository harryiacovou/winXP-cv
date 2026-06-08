import React from 'react';
import styled from 'styled-components';

import { WindowDropDowns } from 'components';
import dropDownData from './dropDownData';
import { profile, about, contact, interests, skillGroups } from '../cvData';
import fallbackPhoto from 'assets/windowsIcons/user.png';
import windows from 'assets/windowsIcons/windows.png';
import userIcon from 'assets/windowsIcons/user.png';
import mailIcon from 'assets/windowsIcons/mail.png';
import linkedinIcon from 'assets/windowsIcons/896(16x16).png';
import githubIcon from 'assets/github-logo.png';
import folder from 'assets/windowsIcons/318(16x16).png';

function AboutMe({ onClose }) {
  function onClickOptionItem(item) {
    if (item === 'Close') onClose();
  }
  return (
    <Div>
      <section className="am__toolbar">
        <div className="am__options">
          <WindowDropDowns
            items={dropDownData}
            onClickItem={onClickOptionItem}
          />
        </div>
        <img className="am__windows-logo" src={windows} alt="windows" />
      </section>
      <section className="am__address_bar">
        <div className="am__address_bar__title">Address</div>
        <div className="am__address_bar__content">
          <img src={userIcon} alt="" className="am__address_bar__img" />
          <div className="am__address_bar__text">My Profile</div>
        </div>
      </section>

      <div className="am__content">
        <div className="am__content__inner">
          {/* left sidebar */}
          <div className="am__left">
            <div className="am__card">
              <div className="am__card__header">Profile Tasks</div>
              <div className="am__card__content">
                <a className="am__link" href={`mailto:${contact.email}`}>
                  <img src={mailIcon} alt="" />
                  <span>E-mail Harry</span>
                </a>
                <a
                  className="am__link"
                  href={contact.linkedin.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={linkedinIcon} alt="" />
                  <span>LinkedIn</span>
                </a>
                <a
                  className="am__link"
                  href={contact.github.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
            <div className="am__card">
              <div className="am__card__header">Details</div>
              <div className="am__card__content">
                <div className="am__detail">
                  <strong>{profile.name}</strong>
                </div>
                <div className="am__detail">{profile.title}</div>
                <div className="am__detail">{contact.location}</div>
              </div>
            </div>
          </div>

          {/* right main panel */}
          <div className="am__right">
            <div className="am__hero">
              <img
                className="am__hero__photo"
                src={profile.photo}
                onError={e => {
                  e.target.onerror = null;
                  e.target.src = fallbackPhoto;
                }}
                alt={profile.name}
              />
              <div className="am__hero__info">
                <h1 className="am__hero__name">{profile.name}</h1>
                <p className="am__hero__title">{profile.title}</p>
                <p className="am__hero__loc">{contact.location}</p>
              </div>
            </div>

            <h2 className="am__section-title">About Me</h2>
            {about.map((p, i) => (
              <p key={i} className="am__paragraph">
                {p}
              </p>
            ))}

            <h2 className="am__section-title">Skills</h2>
            {skillGroups.map(group => (
              <p key={group.category} className="am__paragraph">
                <strong>{group.category}: </strong>
                {group.items}
              </p>
            ))}

            <h2 className="am__section-title">Interests</h2>
            <div className="am__interests">
              {interests.map(item => (
                <div key={item} className="am__interest">
                  <img src={folder} alt="" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Div>
  );
}

const Div = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  background: linear-gradient(to right, #edede5 0%, #ede8cd 100%);
  font-size: 11px;

  .am__toolbar {
    position: relative;
    display: flex;
    align-items: center;
    line-height: 100%;
    height: 24px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.7);
    flex-shrink: 0;
  }
  .am__options {
    height: 23px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    border-right: 1px solid rgba(0, 0, 0, 0.1);
    padding: 1px 0 1px 2px;
    flex: 1;
  }
  .am__windows-logo {
    height: 100%;
    border-left: 1px solid white;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
  .am__address_bar {
    flex-shrink: 0;
    border-top: 1px solid rgba(255, 255, 255, 0.7);
    height: 20px;
    display: flex;
    align-items: center;
    padding: 0 2px;
    box-shadow: inset 0 -2px 3px -1px #b0b0b0;
  }
  .am__address_bar__title {
    color: rgba(0, 0, 0, 0.5);
    padding: 5px;
  }
  .am__address_bar__content {
    border: rgba(122, 122, 255, 0.6) 1px solid;
    height: 100%;
    display: flex;
    flex: 1;
    align-items: center;
    background-color: white;
    padding-left: 3px;
  }
  .am__address_bar__img {
    width: 14px;
    height: 14px;
    margin-right: 4px;
  }
  .am__content {
    flex: 1;
    border: 1px solid rgba(0, 0, 0, 0.4);
    border-top-width: 0;
    background-color: #f1f1f1;
    overflow: auto;
  }
  .am__content__inner {
    display: flex;
    min-height: 100%;
  }
  .am__left {
    width: 180px;
    flex-shrink: 0;
    background: linear-gradient(to bottom, #748aff 0%, #4057d3 100%);
    padding: 10px;
  }
  .am__card {
    border-radius: 3px;
    overflow: hidden;
    margin-bottom: 12px;
  }
  .am__card__header {
    height: 23px;
    display: flex;
    align-items: center;
    padding-left: 11px;
    font-weight: 700;
    color: #0c327d;
    background: linear-gradient(
      to right,
      rgb(240, 240, 255) 0,
      rgb(240, 240, 255) 30%,
      rgb(168, 188, 255) 100%
    );
  }
  .am__card__content {
    padding: 6px 10px;
    background-color: rgba(198, 211, 255, 0.87);
  }
  .am__link {
    display: flex;
    align-items: center;
    color: #0c327d;
    text-decoration: none;
    margin-bottom: 4px;
    img {
      width: 16px;
      height: 16px;
      margin-right: 6px;
    }
    &:hover {
      color: #2b72ff;
      text-decoration: underline;
    }
  }
  .am__detail {
    color: #0c327d;
    line-height: 16px;
  }
  .am__right {
    flex: 1;
    background-color: #fff;
    padding: 16px 20px;
    overflow: auto;
  }
  .am__hero {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
  }
  .am__hero__photo {
    width: 90px;
    height: 90px;
    border-radius: 6px;
    object-fit: cover;
    border: 2px solid #4057d3;
    margin-right: 16px;
    flex-shrink: 0;
  }
  .am__hero__name {
    font-size: 20px;
    font-weight: 700;
    color: #0c327d;
  }
  .am__hero__title {
    font-size: 13px;
    color: #444;
    margin-top: 2px;
  }
  .am__hero__loc {
    font-size: 11px;
    color: #777;
    margin-top: 2px;
  }
  .am__section-title {
    font-size: 13px;
    font-weight: 700;
    color: #0c327d;
    border-bottom: 1px solid #70bfff;
    padding-bottom: 2px;
    margin: 14px 0 8px;
  }
  .am__paragraph {
    line-height: 17px;
    margin-bottom: 8px;
    color: #222;
  }
  .am__interests {
    display: flex;
    flex-wrap: wrap;
  }
  .am__interest {
    display: flex;
    align-items: center;
    width: 110px;
    margin-bottom: 8px;
    img {
      width: 16px;
      height: 16px;
      margin-right: 6px;
    }
  }
`;

export default AboutMe;
