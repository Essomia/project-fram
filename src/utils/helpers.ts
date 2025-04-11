/**
 * Sample utility function that can be used across the project
 * @param text The string to analyze
 * @returns True if the string is not empty
 */
export function isValidString(text: string): boolean {
  return typeof text === 'string' && text.trim().length > 0;
}

/**
 * Formats a date into a readable string
 * @param date The date to format
 * @returns Formatted date string
 */
export function formatDate(date: Date): string {
  return date.toISOString().split('T')[0];
}

/**
 * Safely parse JSON without throwing exceptions
 * @param jsonString The JSON string to parse
 * @returns The parsed object or null if invalid
 */
export function safeJsonParse<T>(jsonString: string): T | null {
  try {
    return JSON.parse(jsonString) as T;
  } catch (e) {
    console.error('Failed to parse JSON:', e);
    return null;
  }
}
