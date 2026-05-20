'use client';

import { useEffect } from 'react';

const WATERMARK_ID = '__rootivara_wm__';
const TARGET_URL = 'https://rootivara.vercel.app';

function injectWatermark() {
  // Remove stale instance if exists (for re-injection)
  const stale = document.getElementById(WATERMARK_ID);
  if (stale) stale.remove();

  const host = document.createElement('div');
  host.id = WATERMARK_ID;

  // Inline critical positioning styles via setAttribute so they are hard to strip
  host.setAttribute(
    'style',
    [
      'position:fixed',
      'bottom:18px',
      'left:50%',
      'transform:translateX(-50%)',
      'z-index:2147483647',
      'pointer-events:auto',
      'display:block',
      'visibility:visible',
      'opacity:1',
    ].join('!important;') + '!important'
  );

  // Shadow DOM isolates styles — DevTools can inspect but cannot easily override
  const shadow = host.attachShadow({ mode: 'closed' });

  const style = document.createElement('style');
  style.textContent = `
    :host {
      all: initial;
    }
    a {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 7px 16px 7px 12px;
      background: rgba(17, 17, 17, 0.82);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      border-radius: 999px;
      border: 1px solid rgba(255,255,255,0.12);
      text-decoration: none;
      cursor: pointer;
      box-shadow: 0 4px 20px rgba(0,0,0,0.35), 0 0 0 1px rgba(132,204,22,0.18);
      transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
      font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
    }
    a:hover {
      transform: translateY(-2px);
      background: rgba(25, 25, 25, 0.92);
      box-shadow: 0 8px 28px rgba(0,0,0,0.45), 0 0 0 1.5px rgba(132,204,22,0.35);
    }
    a:active {
      transform: translateY(0px);
    }
    .dot {
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: #84cc16;
      box-shadow: 0 0 6px #84cc16;
      flex-shrink: 0;
      animation: pulse 2.4s ease-in-out infinite;
    }
    @keyframes pulse {
      0%, 100% { opacity: 1; box-shadow: 0 0 6px #84cc16; }
      50%       { opacity: 0.5; box-shadow: 0 0 2px #84cc16; }
    }
    .label {
      font-size: 11.5px;
      font-weight: 600;
      letter-spacing: 0.01em;
      color: #e5e7eb;
      white-space: nowrap;
    }
    .label span {
      color: #84cc16;
    }
  `;

  const link = document.createElement('a');
  link.href = TARGET_URL;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';

  const dot = document.createElement('div');
  dot.className = 'dot';

  const label = document.createElement('div');
  label.className = 'label';
  label.innerHTML = 'Made by <span>Rootivara</span>';

  link.appendChild(dot);
  link.appendChild(label);
  shadow.appendChild(style);
  shadow.appendChild(link);

  document.body.appendChild(host);
  return host;
}

export default function Watermark() {
  useEffect(() => {
    let watermarkEl = injectWatermark();

    // --- Guard 1: MutationObserver — re-inject if removed or hidden ---
    const observer = new MutationObserver(() => {
      const el = document.getElementById(WATERMARK_ID);
      if (!el || el.style.display === 'none' || el.style.visibility === 'hidden' || el.style.opacity === '0') {
        watermarkEl = injectWatermark();
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['style', 'class'],
    });

    // --- Guard 2: Interval fallback every 1.5 s ---
    const interval = setInterval(() => {
      const el = document.getElementById(WATERMARK_ID);
      if (!el) {
        watermarkEl = injectWatermark();
      }
    }, 1500);

    // --- Guard 3: Re-apply inline style every second in case it was mutated ---
    const styleGuard = setInterval(() => {
      const el = document.getElementById(WATERMARK_ID);
      if (el) {
        el.setAttribute(
          'style',
          [
            'position:fixed',
            'bottom:18px',
            'left:50%',
            'transform:translateX(-50%)',
            'z-index:2147483647',
            'pointer-events:auto',
            'display:block',
            'visibility:visible',
            'opacity:1',
          ].join('!important;') + '!important'
        );
      }
    }, 1000);

    return () => {
      observer.disconnect();
      clearInterval(interval);
      clearInterval(styleGuard);
    };
  }, []);

  // Renders nothing into the React tree — watermark lives directly on <body>
  return null;
}
