import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { proficiency } from '../cvData';

// Authentic XP "copy progress" segmented bar: a green fill made of repeating
// blocks whose width animates up to the skill level on mount.
function SegmentedBar({ level, animate }) {
  return (
    <div className="seg__track">
      <div
        className="seg__fill"
        style={{ width: animate ? `${level}%` : '0%' }}
      />
    </div>
  );
}

function Skills() {
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setAnimate(true), 150);
    return () => clearTimeout(t);
  }, []);

  return (
    <Div>
      <div className="skills__scroll">
        <div className="skills__panel">
          <div className="skills__panel__title">Proficiency</div>
          {proficiency.map(skill => (
            <div key={skill.name} className="skills__row">
              <div className="skills__label">{skill.name}</div>
              <SegmentedBar level={skill.level} animate={animate} />
              <div className="skills__pct">{skill.level}%</div>
            </div>
          ))}
        </div>
      </div>
    </Div>
  );
}

const Div = styled.div`
  height: 100%;
  width: 100%;
  background: #ece9d8;
  font-size: 11px;
  display: flex;
  flex-direction: column;

  .skills__scroll {
    flex: 1;
    overflow: auto;
    padding: 12px;
  }
  .skills__panel {
    background: #fff;
    border: 1px solid #7f9db9;
    margin-bottom: 14px;
    padding: 10px 12px 14px;
  }
  .skills__panel__title {
    font-weight: 700;
    color: #0c327d;
    border-bottom: 1px solid #c5c5c5;
    padding-bottom: 4px;
    margin-bottom: 10px;
  }
  .skills__row {
    display: flex;
    align-items: center;
    margin-bottom: 9px;
  }
  .skills__label {
    width: 70px;
    flex-shrink: 0;
    font-weight: 700;
  }
  .skills__pct {
    width: 36px;
    flex-shrink: 0;
    text-align: right;
    color: #555;
  }

  /* ---- XP segmented progress bar ---- */
  .seg__track {
    flex: 1;
    height: 16px;
    background: #fff;
    border: 1px solid #7f9db9;
    border-radius: 1px;
    padding: 1px;
    overflow: hidden;
    margin: 0 8px;
    box-shadow: inset 1px 1px 1px rgba(0, 0, 0, 0.1);
  }
  .seg__fill {
    height: 100%;
    transition: width 1.2s ease-in-out;
    background: repeating-linear-gradient(
      to right,
      #1ca91c 0,
      #1ca91c 7px,
      transparent 7px,
      transparent 9px
    );
  }
`;

export default Skills;
