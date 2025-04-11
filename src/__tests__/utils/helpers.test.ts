import { isValidString, formatDate, safeJsonParse } from '../../utils/helpers';

describe('Helper', () => {
  describe('isValidString', () => {
    it('returns true for valid strings', () => {
      expect(isValidString('hello')).toBe(true);
    });

    it('returns false for empty strings', () => {
      expect(isValidString('')).toBe(false);
      expect(isValidString('   ')).toBe(false);
    });
  });

  describe('formatDate', () => {
    it('formats a date correctly', () => {
      const testDate = new Date('2023-09-15T12:00:00Z');
      expect(formatDate(testDate)).toBe('2023-09-15');
    });
  });

  describe('safeJsonParse', () => {
    it('parses valid JSON without errors', () => {
      const result = safeJsonParse<{ name: string }>('{"name":"test"}');
      expect(result).toEqual({ name: 'test' });
    });

    it('returns null for invalid JSON', () => {
      const result = safeJsonParse<{ name: string }>('{invalid:json}');
      expect(result).toBeNull();
    });
  });
});
