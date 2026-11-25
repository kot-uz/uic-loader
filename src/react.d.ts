import type { CSSProperties, ReactElement } from 'react';
import type { UzLoaderOptions } from './index';
export interface UzLoaderProps extends UzLoaderOptions {
  className?: string;
  style?: CSSProperties;
}
export declare function UzLoader(props: UzLoaderProps): ReactElement;
export default UzLoader;
