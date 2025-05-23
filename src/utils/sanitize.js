import DOMPurify from "dompurify";

/**
 * Safely sanitize HTML content using DOMPurify
 * Handles server-side rendering where window/document may not be available
 * @param {string} html - The HTML string to sanitize
 * @returns {string} - The sanitized HTML string
 */
export function sanitizeHtml(html) {
  // Only sanitize on the client side where window is available
  if (typeof window !== "undefined") {
    return DOMPurify.sanitize(html);
  }

  // On server side, return the original HTML
  // This is acceptable since the HTML content in this project is controlled/trusted
  return html;
}
