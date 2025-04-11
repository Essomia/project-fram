// Silence console.error during tests
const originalConsoleError = console.error;

console.error = (/*...args*/) => {
  // If you want to see specific errors, you can add conditions here
  // For example: if (args[0].includes('specific message')) originalConsoleError(...args);
  // Comment the next line to completely silence the errors
  // For debugging, you might want to see the suppressed errors
  // originalConsoleError(...args);
};

// Optional: Restore console.error after all tests
afterAll(() => {
  console.error = originalConsoleError;
});
