import * as __angular from 'angular';

declare global {
  const angular: typeof __angular;
  const API_URL: string;
}

declare var require: {
    <T>(path: string): T;
    (paths: string[], callback: (...modules: any[]) => void): void;
    ensure: (paths: string[], callback: (require: <T>(path: string) => T) => void) => void;
};
