import type { CSSProperties, ReactElement } from 'react';
import type { UicLoaderOptions } from './index';
export interface UicLoaderProps extends UicLoaderOptions {
  className?: string;
  style?: CSSProperties;
}
export declare function UicLoader(props: UicLoaderProps): ReactElement;
export default UicLoader;
