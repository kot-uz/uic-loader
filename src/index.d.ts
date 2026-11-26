export interface UicLoaderOptions {
  /** Число (px) или любая CSS-длина: '3rem', '64px'. По умолчанию 48. */
  size?: number | string;
  /** Цвет линий. По умолчанию фирменный #4C51C6. */
  color?: string;
  /** Время одного оборота электрона, секунды. По умолчанию 0.75. */
  duration?: number | string;
  /** Текст для скринридеров. По умолчанию 'Loading'. */
  label?: string;
}
export declare const UIC_BLUE: string;
export declare const DEFAULTS: Readonly<Required<UicLoaderOptions>>;
export declare const STYLES: string;
export declare function markup(opts?: UicLoaderOptions): string;
export declare function html(opts?: UicLoaderOptions): string;
export declare function normalize(opts?: UicLoaderOptions): Required<UicLoaderOptions>;
export declare class UicLoaderElement extends HTMLElement {}
export declare function defineUicLoader(tag?: string): void;

declare global {
  interface HTMLElementTagNameMap {
    'uic-loader': UicLoaderElement;
  }
}
