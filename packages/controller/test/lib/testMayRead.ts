import type { TestContext } from '../_Types.js';

/**
 * CI probe only: stands in for the test module that upstream master imports but does not contain yet
 *
 * @param _it The mocha test function
 * @param _context The shared test context
 */
export function register(_it: Mocha.TestFunction, _context: TestContext): void {}
