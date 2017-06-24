import * as __angular from 'angular';
import * as __gulp from 'gulp';

declare global {
  const angular: typeof __angular;
  const gulp: typeof __gulp;
}

declare var require: {
    <T>(path: string): T;
    (paths: string[], callback: (...modules: any[]) => void): void;
    ensure: (paths: string[], callback: (require: <T>(path: string) => T) => void) => void;
};
