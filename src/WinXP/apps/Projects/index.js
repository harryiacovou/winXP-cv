import React from 'react';
import styled from 'styled-components';

import { WindowDropDowns } from 'components';
import dropDownData from './dropDownData';
import { projects } from '../cvData';
import windows from 'assets/windowsIcons/windows.png';
import folderIcon from 'assets/windowsIcons/318(16x16).png';
import folder from 'assets/windowsIcons/318(48x48).png';

function Projects({ onClose }) {
  function onClickOptionItem(item) {
    if (item === 'Close') onClose();
  }
  return (
    <Div>
      <section className="pj__toolbar">
        <div className="pj__options">
          <WindowDropDowns
            items={dropDownData}
            onClickItem={onClickOptionItem}
          />
        </div>
        <img className="pj__windows-logo" src={windows} alt="windows" />
      </section>
      <section className="pj__address_bar">
        <div className="pj__address_bar__title">Address</div>
        <div className="pj__address_bar__content">
          <img src={folderIcon} alt="" className="pj__address_bar__img" />
          <div className="pj__address_bar__text">My Projects</div>
        </div>
      </section>

      <div className="pj__content">
        <div className="pj__content__inner">
          <div className="pj__left">
            <div className="pj__card">
              <div className="pj__card__header">File and Folder Tasks</div>
              <div className="pj__card__content">
                <div className="pj__hint">
                  Double-click a project to open it in a new tab.
                </div>
              </div>
            </div>
          </div>

          <div className="pj__right">
            <div className="pj__right__header">
              Projects ({projects.length})
            </div>
            <div className="pj__grid">
              {projects.map(p => (
                <a
                  key={p.name}
                  className="pj__item"
                  href={p.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className="pj__item__img" src={folder} alt="" />
                  <div className="pj__item__text">
                    <div className="pj__item__name">{p.name}</div>
                    <div className="pj__item__detail">{p.detail}</div>
                  </div>
                </a>
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

  .pj__toolbar {
    position: relative;
    display: flex;
    align-items: center;
    height: 24px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.7);
    flex-shrink: 0;
  }
  .pj__options {
    height: 23px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    border-right: 1px solid rgba(0, 0, 0, 0.1);
    padding: 1px 0 1px 2px;
    flex: 1;
  }
  .pj__windows-logo {
    height: 100%;
    border-left: 1px solid white;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
  .pj__address_bar {
    flex-shrink: 0;
    border-top: 1px solid rgba(255, 255, 255, 0.7);
    height: 20px;
    display: flex;
    align-items: center;
    padding: 0 2px;
    box-shadow: inset 0 -2px 3px -1px #b0b0b0;
  }
  .pj__address_bar__title {
    color: rgba(0, 0, 0, 0.5);
    padding: 5px;
  }
  .pj__address_bar__content {
    border: rgba(122, 122, 255, 0.6) 1px solid;
    height: 100%;
    display: flex;
    flex: 1;
    align-items: center;
    background-color: white;
    padding-left: 3px;
  }
  .pj__address_bar__img {
    width: 14px;
    height: 14px;
    margin-right: 4px;
  }
  .pj__content {
    flex: 1;
    border: 1px solid rgba(0, 0, 0, 0.4);
    border-top-width: 0;
    background-color: #f1f1f1;
    overflow: auto;
  }
  .pj__content__inner {
    display: flex;
    min-height: 100%;
  }
  .pj__left {
    width: 180px;
    flex-shrink: 0;
    background: linear-gradient(to bottom, #748aff 0%, #4057d3 100%);
    padding: 10px;
  }
  .pj__card {
    border-radius: 3px;
    overflow: hidden;
  }
  .pj__card__header {
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
  .pj__card__content {
    padding: 8px 10px;
    background-color: rgba(198, 211, 255, 0.87);
  }
  .pj__hint {
    color: #0c327d;
    line-height: 15px;
  }
  .pj__right {
    flex: 1;
    background-color: #fff;
    padding: 6px 0;
  }
  .pj__right__header {
    font-weight: 700;
    padding: 2px 0 4px 12px;
    margin-bottom: 8px;
    position: relative;
    &:after {
      content: '';
      display: block;
      background: linear-gradient(to right, #70bfff 0, #fff 100%);
      position: absolute;
      bottom: 0;
      left: 0;
      height: 1px;
      width: 100%;
    }
  }
  .pj__grid {
    padding: 0 12px;
  }
  .pj__item {
    display: flex;
    align-items: center;
    padding: 6px;
    margin-bottom: 4px;
    text-decoration: none;
    color: #222;
    border: 1px solid transparent;
    border-radius: 3px;
    &:hover {
      background-color: #e8f0ff;
      border-color: #cdddf6;
    }
  }
  .pj__item__img {
    width: 40px;
    height: 40px;
    margin-right: 10px;
    flex-shrink: 0;
  }
  .pj__item__name {
    font-weight: 700;
    color: #0c327d;
    margin-bottom: 2px;
  }
  .pj__item__detail {
    color: #555;
    line-height: 15px;
  }
`;

export default Projects;
