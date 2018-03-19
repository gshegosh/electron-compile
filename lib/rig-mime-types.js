'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.init = init;

var _mimeTypes = require('@paulcbetts/mime-types');

var _mimeTypes2 = _interopRequireDefault(_mimeTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const typesToRig = {
  'text/typescript': 'ts',
  'text/tsx': 'tsx',
  'text/jade': 'jade',
  'text/cson': 'cson',
  'text/stylus': 'styl',
  'text/sass': 'sass',
  'text/scss': 'scss',
  'text/riot': 'tag',
  'text/vue': 'vue',
  'text/graphql': 'graphql'
};

/**
 * Adds MIME types for types not in the mime-types package
 *
 * @private
 */
function init() {
  Object.keys(typesToRig).forEach(type => {
    let ext = typesToRig[type];

    _mimeTypes2.default.types[ext] = type;
    _mimeTypes2.default.extensions[type] = [ext];
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yaWctbWltZS10eXBlcy5qcyJdLCJuYW1lcyI6WyJpbml0IiwidHlwZXNUb1JpZyIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwidHlwZSIsImV4dCIsInR5cGVzIiwiZXh0ZW5zaW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFvQmdCQSxJLEdBQUFBLEk7O0FBcEJoQjs7Ozs7O0FBRUEsTUFBTUMsYUFBYTtBQUNqQixxQkFBbUIsSUFERjtBQUVqQixjQUFZLEtBRks7QUFHakIsZUFBYSxNQUhJO0FBSWpCLGVBQWEsTUFKSTtBQUtqQixpQkFBZSxNQUxFO0FBTWpCLGVBQWEsTUFOSTtBQU9qQixlQUFhLE1BUEk7QUFRakIsZUFBYSxLQVJJO0FBU2pCLGNBQVksS0FUSztBQVVqQixrQkFBZ0I7QUFWQyxDQUFuQjs7QUFhQTs7Ozs7QUFLTyxTQUFTRCxJQUFULEdBQWdCO0FBQ3JCRSxTQUFPQyxJQUFQLENBQVlGLFVBQVosRUFBd0JHLE9BQXhCLENBQWlDQyxJQUFELElBQVU7QUFDeEMsUUFBSUMsTUFBTUwsV0FBV0ksSUFBWCxDQUFWOztBQUVBLHdCQUFVRSxLQUFWLENBQWdCRCxHQUFoQixJQUF1QkQsSUFBdkI7QUFDQSx3QkFBVUcsVUFBVixDQUFxQkgsSUFBckIsSUFBNkIsQ0FBQ0MsR0FBRCxDQUE3QjtBQUNELEdBTEQ7QUFNRCIsImZpbGUiOiJyaWctbWltZS10eXBlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtaW1lVHlwZXMgZnJvbSAnQHBhdWxjYmV0dHMvbWltZS10eXBlcyc7XG5cbmNvbnN0IHR5cGVzVG9SaWcgPSB7XG4gICd0ZXh0L3R5cGVzY3JpcHQnOiAndHMnLFxuICAndGV4dC90c3gnOiAndHN4JyxcbiAgJ3RleHQvamFkZSc6ICdqYWRlJyxcbiAgJ3RleHQvY3Nvbic6ICdjc29uJyxcbiAgJ3RleHQvc3R5bHVzJzogJ3N0eWwnLFxuICAndGV4dC9zYXNzJzogJ3Nhc3MnLFxuICAndGV4dC9zY3NzJzogJ3Njc3MnLFxuICAndGV4dC9yaW90JzogJ3RhZycsXG4gICd0ZXh0L3Z1ZSc6ICd2dWUnLFxuICAndGV4dC9ncmFwaHFsJzogJ2dyYXBocWwnLFxufTtcblxuLyoqXG4gKiBBZGRzIE1JTUUgdHlwZXMgZm9yIHR5cGVzIG5vdCBpbiB0aGUgbWltZS10eXBlcyBwYWNrYWdlXG4gKlxuICogQHByaXZhdGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGluaXQoKSB7XG4gIE9iamVjdC5rZXlzKHR5cGVzVG9SaWcpLmZvckVhY2goKHR5cGUpID0+IHtcbiAgICBsZXQgZXh0ID0gdHlwZXNUb1JpZ1t0eXBlXTtcblxuICAgIG1pbWVUeXBlcy50eXBlc1tleHRdID0gdHlwZTtcbiAgICBtaW1lVHlwZXMuZXh0ZW5zaW9uc1t0eXBlXSA9IFtleHRdO1xuICB9KTtcbn1cbiJdfQ==