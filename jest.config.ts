import type { Config } from 'jest'
import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})
 
// Add any custom config to be passed to Jest
const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1', 
    '^@/components/(.*)$': '<rootDir>/components/$1',
    '^next/image$': '<rootDir>/__mocks__/next/image.tsx',
  },
  preset: "ts-jest",
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  testMatch: ['**/?(*.)+(test).ts?(x)'],
  collectCoverage: true, // Enable coverage collection
  coverageDirectory: 'coverage', // Specify the directory to output coverage reports
  coverageReporters: ['html', 'text'], // Specify the coverage reporters
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  
}
 
// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config)