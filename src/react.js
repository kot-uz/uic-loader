import { createElement, useMemo } from 'react';
import { html } from './core.js';

/** React-компонент. SSR-безопасен: рендерит готовую SVG-разметку. */
export function UicLoader({ size, color, duration, label, className, style }) {
  const __html = useMemo(
    () => html({ size, color, duration, label }),
    [size, color, duration, label]
  );
  return createElement('span', {
    className,
    style: { display: 'inline-block', lineHeight: 0, ...style },
    dangerouslySetInnerHTML: { __html },
  });
}

export default UicLoader;
