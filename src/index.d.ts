export interface UzLoaderOptions {
  /** Число (px) или любая CSS-длина: '3rem', '64px'. По умолчанию 48. */
  size?: number | string;
  /** Цвет линий. По умолчанию фирменный #4C51C6. */
  color?: string;
  /** Время одного оборота электрона, секунды. По умолчанию 0.75. */
  duration?: number | string;
  /** Текст для скринридеров. По умолчанию 'Loading'. */
  label?: string;
}
export declare const UZ_BLUE: string;
export declare const DEFAULTS: Readonly<Required<UzLoaderOptions>>;
export declare const STYLES: string;
export declare function markup(opts?: UzLoaderOptions): string;
export declare function html(opts?: UzLoaderOptions): string;
export declare function normalize(opts?: UzLoaderOptions): Required<UzLoaderOptions>;
export declare class UzLoaderElement extends HTMLElement {}
export declare function defineUzLoader(tag?: string): void;

declare global {
  interface HTMLElementTagNameMap {
    'uz-loader': UzLoaderElement;
  }
}
