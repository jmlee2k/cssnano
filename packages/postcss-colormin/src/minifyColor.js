import { colord, extend } from 'colord';
import namesPlugin from 'colord/plugins/names';
import minifierPlugin from 'colord/plugins/minify';

extend([namesPlugin, minifierPlugin]);

/**
 * Performs color value minification
 *
 * @param {string} input - CSS value
 * @param  options - object with colord.minify() options
 */
export default function minifyColor(input, options = {}) {
  const instance = colord(input);

  if (instance.isValid()) {
    // Try to shorten the string if it is a valid CSS color value
    const minified = instance.minify(options);

    // Fall back to the original input if it's smaller or has equal length
    return minified.length < input.length ? minified : input.toLowerCase();
  } else {
    // Possibly malformed, so pass through
    return input;
  }
}
