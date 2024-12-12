import nextJest from "next/jest";
const createJestConfig = nextJest({
  dir: "./",
});
const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testEnvironment: "jsdom",
  clearMocks: true,
};
export default createJestConfig(customJestConfig);
