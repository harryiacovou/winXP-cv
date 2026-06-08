import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { profile } from 'WinXP/apps/cvData';
import fallbackPhoto from 'assets/windowsIcons/user.png';
import xpLogo from 'assets/windows-xp-logo.png';

// Recreation of the Windows XP logon experience. Two phases:
//   1. "select" — click your user tile to begin (like the XP welcome screen).
//   2. "welcome" — the blue "welcome" screen that plays the logon sound and
//      stays up for exactly as long as the sound, then reveals the desktop.
const DEFAULT_WELCOME_MS = 4500; // fallback if the sound is missing/blocked

function Login({ onLogin }) {
  const [phase, setPhase] = useState('select');
  const finished = useRef(false);
  // Keep the latest onLogin in a ref so the welcome effect can depend on
  // `phase` alone. onLogin is recreated on every parent render (the desktop
  // re-renders constantly via useMouse), and depending on it would tear down
  // and restart the audio on every mouse move — causing the sound to glitch.
  const onLoginRef = useRef(onLogin);
  onLoginRef.current = onLogin;

  useEffect(() => {
    if (phase !== 'welcome') return undefined;

    let timer;
    const finish = () => {
      if (finished.current) return;
      finished.current = true;
      onLoginRef.current();
    };

    // TODO: swap /public/sounds/logon.wav for any logon sound you like — the
    // welcome screen automatically lasts as long as whatever file is there.
    let audio;
    try {
      audio = new Audio(`${process.env.PUBLIC_URL}/sounds/logon.wav`);
      audio.volume = 0.5;
      // End the welcome screen the moment the sound finishes.
      audio.addEventListener('ended', finish);
      // Once we know the real duration, match the safety timer to it.
      audio.addEventListener('loadedmetadata', () => {
        if (isFinite(audio.duration) && audio.duration > 0) {
          clearTimeout(timer);
          timer = setTimeout(finish, audio.duration * 1000 + 400);
        }
      });
      const playback = audio.play();
      if (playback && playback.catch) {
        playback.catch(() => {
          clearTimeout(timer);
          timer = setTimeout(finish, DEFAULT_WELCOME_MS);
        });
      }
    } catch (e) {
      /* ignore — sound is optional */
    }

    // Safety fallback so we always reach the desktop even with no/blocked audio.
    timer = setTimeout(finish, DEFAULT_WELCOME_MS);

    return () => {
      clearTimeout(timer);
      if (audio) {
        audio.removeEventListener('ended', finish);
        audio.pause();
      }
    };
  }, [phase]);

  const beginWelcome = () => setPhase('welcome');

  return (
    <Div>
      <div className="login__bar login__bar--top" />

      {phase === 'select' ? (
        <div className="login__main">
          <div className="login__left">
            <img className="login__logo" src={xpLogo} alt="Windows XP" />
            <div className="login__tagline">To begin, click your user name</div>
          </div>
          <div className="login__divider" />
          <div className="login__right">
            <div
              className="login__user"
              onClick={beginWelcome}
              role="button"
              tabIndex={0}
              onKeyDown={e => (e.key === 'Enter' ? beginWelcome() : null)}
            >
              <img
                className="login__user__photo"
                src={profile.photo}
                onError={e => {
                  e.target.onerror = null;
                  e.target.src = fallbackPhoto;
                }}
                alt={profile.name}
              />
              <div className="login__user__meta">
                <div className="login__user__name">{profile.name}</div>
                <div className="login__user__hint">Click to view my CV</div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="login__main login__main--welcome">
          <div className="login__welcome">welcome</div>
        </div>
      )}

      <div className="login__bar login__bar--bottom">
        {phase === 'select' ? (
          <>
            <span className="login__footer-text">
              After you log on, you can explore the desktop to learn more about
              me.
            </span>
            <span className="login__footer-brand">Harry Michael-Iacovou</span>
          </>
        ) : (
          <span className="login__footer-text">loading your desktop…</span>
        )}
      </div>
    </Div>
  );
}

const Div = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10000;
  font-family: Tahoma, 'Noto Sans', sans-serif;
  display: flex;
  flex-direction: column;
  color: #fff;
  background: linear-gradient(to bottom, #5a7edc 0%, #5a7edc 45%, #4f74d8 100%);

  .login__bar {
    height: 90px;
    flex-shrink: 0;
    background: linear-gradient(
      to bottom,
      #003fc4 0%,
      #1d63e0 50%,
      #003fc4 100%
    );
    position: relative;
  }
  .login__bar--top {
    box-shadow: inset 0 -2px 3px rgba(0, 0, 0, 0.3);
    border-bottom: 2px solid #f7a000;
  }
  .login__bar--bottom {
    height: 70px;
    border-top: 2px solid #f7a000;
    box-shadow: inset 0 2px 3px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 40px;
  }
  .login__footer-text {
    font-size: 12px;
    opacity: 0.9;
  }
  .login__footer-brand {
    font-size: 12px;
    font-weight: 700;
    margin-top: 4px;
  }

  .login__main {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .login__main--welcome {
    justify-content: flex-start;
    padding-left: 12%;
  }
  .login__welcome {
    font-size: 64px;
    font-weight: 400;
    color: #fff;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4);
    animation: welcomeFade 1.2s ease-in;
  }
  @keyframes welcomeFade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .login__left {
    width: 320px;
    text-align: right;
    padding-right: 28px;
  }
  .login__logo {
    width: 230px;
    height: auto;
    margin-bottom: 6px;
  }
  .login__tagline {
    font-size: 13px;
    margin-top: 12px;
    opacity: 0.95;
  }
  .login__divider {
    width: 1px;
    height: 220px;
    background: linear-gradient(
      to bottom,
      transparent 0%,
      rgba(255, 255, 255, 0.6) 50%,
      transparent 100%
    );
  }
  .login__right {
    width: 320px;
    padding-left: 28px;
  }
  .login__user {
    display: flex;
    align-items: center;
    padding: 8px;
    border-radius: 4px;
    cursor: pointer;
    outline: none;
    &:hover,
    &:focus {
      background: rgba(255, 255, 255, 0.18);
    }
  }
  .login__user__photo {
    width: 60px;
    height: 60px;
    border-radius: 4px;
    object-fit: cover;
    border: 2px solid #fff;
    margin-right: 12px;
    flex-shrink: 0;
  }
  .login__user__name {
    font-size: 17px;
    font-weight: 700;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4);
  }
  .login__user__hint {
    font-size: 12px;
    opacity: 0.9;
    margin-top: 2px;
  }
`;

export default Login;
