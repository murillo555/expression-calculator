import type { Config } from 'jest';

import { pathsToModuleNameMapper } from 'ts-jest'
import { compilerOptions } from './tsconfig.json'



const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: "<rootDir>" }),
  modulePaths: [
    '<rootDir>'
  ],
  setupFilesAfterEnv: ["<rootDir>/Test/setupTests.ts"]
};

export default config;
