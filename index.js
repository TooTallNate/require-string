
/**
 * Module exports.
 */

module.exports = requireString;

/**
 * Turns an arbitrary String into a CommonJS compatible module.
 */

function requireString (str) {
  return 'module.exports = function(){\n' +
    '  return ' + JSON.stringify(str) + ';\n' +
    '};';
}
