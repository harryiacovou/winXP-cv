import React from 'react';
import styled from 'styled-components';

import { WindowDropDowns } from 'components';
import dropDownData from './dropDownData';
import {
  profile,
  contact,
  experience,
  education,
  skillGroups,
} from '../cvData';

function Resume({ onClose }) {
  function onClickOptionItem(item) {
    if (item === 'Exit') onClose();
  }
  return (
    <Div>
      <section className="resume__toolbar">
        <WindowDropDowns items={dropDownData} onClickItem={onClickOptionItem} />
      </section>
      <div className="resume__page-wrapper">
        <div className="resume__page">
          <header className="resume__head">
            <h1 className="resume__name">{profile.name}</h1>
            <p className="resume__role">{profile.title}</p>
            <p className="resume__contact">
              {contact.location} &nbsp;•&nbsp; {contact.email} &nbsp;•&nbsp;{' '}
              <a href={contact.linkedin.url} target="_blank" rel="noreferrer">
                LinkedIn
              </a>{' '}
              &nbsp;•&nbsp;{' '}
              <a href={contact.github.url} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </p>
          </header>

          <h2 className="resume__section">Experience</h2>
          {experience.map((job, i) => (
            <div key={i} className="resume__entry">
              <div className="resume__entry-head">
                <span className="resume__entry-title">{job.role}</span>
                <span className="resume__entry-period">{job.period}</span>
              </div>
              <div className="resume__entry-org">{job.org}</div>
              <p className="resume__entry-detail">{job.detail}</p>
            </div>
          ))}

          <h2 className="resume__section">Education</h2>
          {education.map((ed, i) => (
            <div key={i} className="resume__entry">
              <div className="resume__entry-head">
                <span className="resume__entry-title">{ed.qualification}</span>
                <span className="resume__entry-period">{ed.period}</span>
              </div>
              <div className="resume__entry-org">{ed.org}</div>
              <p className="resume__entry-detail">{ed.detail}</p>
            </div>
          ))}

          <h2 className="resume__section">Skills</h2>
          {skillGroups.map(group => (
            <p key={group.category} className="resume__entry-detail">
              <strong>{group.category}: </strong>
              {group.items}
            </p>
          ))}
        </div>
      </div>
    </Div>
  );
}

const Div = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  background: linear-gradient(to right, #edede5 0%, #ede8cd 100%);

  .resume__toolbar {
    position: relative;
    height: 21px;
    flex-shrink: 0;
    border-bottom: 1px solid white;
  }
  .resume__page-wrapper {
    flex: auto;
    overflow: auto;
    background-color: #808080;
    padding: 14px;
    border: 1px solid #96abff;
  }
  /* white "sheet of paper" look */
  .resume__page {
    background-color: #fff;
    max-width: 720px;
    margin: 0 auto;
    padding: 28px 36px;
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.5);
    font-size: 12px;
    color: #1a1a1a;
    line-height: 17px;
  }
  .resume__head {
    text-align: center;
    border-bottom: 2px solid #0c327d;
    padding-bottom: 10px;
    margin-bottom: 6px;
  }
  .resume__name {
    font-size: 24px;
    font-weight: 700;
    color: #0c327d;
  }
  .resume__role {
    font-size: 14px;
    color: #444;
    margin-top: 2px;
  }
  .resume__contact {
    font-size: 11px;
    color: #555;
    margin-top: 6px;
    a {
      color: #0a55c4;
      text-decoration: none;
    }
    a:hover {
      text-decoration: underline;
    }
  }
  .resume__section {
    font-size: 14px;
    font-weight: 700;
    color: #0c327d;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    border-bottom: 1px solid #c5c5c5;
    margin: 16px 0 8px;
    padding-bottom: 2px;
  }
  .resume__entry {
    margin-bottom: 12px;
  }
  .resume__entry-head {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }
  .resume__entry-title {
    font-weight: 700;
    font-size: 13px;
  }
  .resume__entry-period {
    font-size: 11px;
    color: #666;
    white-space: nowrap;
    padding-left: 10px;
  }
  .resume__entry-org {
    font-style: italic;
    color: #0a55c4;
    margin-bottom: 3px;
  }
  .resume__entry-detail {
    margin-bottom: 6px;
  }
`;

export default Resume;
