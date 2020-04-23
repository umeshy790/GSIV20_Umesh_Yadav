"use strict";
/**
 * @format
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("react-native");
var react_1 = __importDefault(require("react"));
// Note: test renderer must be required after react-native.
var react_test_renderer_1 = __importDefault(require("react-test-renderer"));
var App_1 = __importDefault(require("../App"));
test('renders correctly', function () {
    var tree = react_test_renderer_1.default.create(<App_1.default />);
    expect(tree).toBeDefined();
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvdW1lc2gvRG9jdW1lbnRzL2Rldi9HU3luZXJneS9pbWRiL19fdGVzdHNfXy9BcHAtdGVzdC50c3giLCJzb3VyY2VzIjpbIi9ob21lL3VtZXNoL0RvY3VtZW50cy9kZXYvR1N5bmVyZ3kvaW1kYi9fX3Rlc3RzX18vQXBwLXRlc3QudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7R0FFRzs7Ozs7QUFFSCx3QkFBc0I7QUFDdEIsZ0RBQTBCO0FBRTFCLDJEQUEyRDtBQUMzRCw0RUFBMkM7QUFDM0MsK0NBQXlCO0FBRXpCLElBQUksQ0FBQyxtQkFBbUIsRUFBRTtJQUN4QixJQUFNLElBQUksR0FBRyw2QkFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLGFBQUcsQ0FBQyxBQUFELEVBQUcsQ0FBQyxDQUFDO0lBQ3RDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUM3QixDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGZvcm1hdFxuICovXG5cbmltcG9ydCAncmVhY3QtbmF0aXZlJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbi8vIE5vdGU6IHRlc3QgcmVuZGVyZXIgbXVzdCBiZSByZXF1aXJlZCBhZnRlciByZWFjdC1uYXRpdmUuXG5pbXBvcnQgcmVuZGVyZXIgZnJvbSAncmVhY3QtdGVzdC1yZW5kZXJlcic7XG5pbXBvcnQgQXBwIGZyb20gJy4uL0FwcCc7XG5cbnRlc3QoJ3JlbmRlcnMgY29ycmVjdGx5JywgKCkgPT4ge1xuICBjb25zdCB0cmVlID0gcmVuZGVyZXIuY3JlYXRlKDxBcHAgLz4pO1xuICBleHBlY3QodHJlZSkudG9CZURlZmluZWQoKTtcbn0pO1xuIl19