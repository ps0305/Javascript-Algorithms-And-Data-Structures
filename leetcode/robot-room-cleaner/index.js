/**
 * // This is the robot's control interface.
 * // You should not implement it, or speculate about its implementation
 * function Robot() {
 *
 *     // Returns true if the cell in front is open and robot moves into the cell.
 *     // Returns false if the cell in front is blocked and robot stays in the current cell.
 *     @return {boolean}
 *     this.move = function() {
 *         ...
 *     };
 *
 *     // Robot will stay in the same cell after calling turnLeft/turnRight.
 *     // Each turn will be 90 degrees.
 *     @return {void}
 *     this.turnLeft = function() {
 *         ...
 *     };
 *
 *     // Robot will stay in the same cell after calling turnLeft/turnRight.
 *     // Each turn will be 90 degrees.
 *     @return {void}
 *     this.turnRight = function() {
 *         ...
 *     };
 *
 *     // Clean the current cell.
 *     @return {void}
 *     this.clean = function() {
 *         ...
 *     };
 * };
 */
/**
 * @param {Robot} robot
 * @return {void}
 */
const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];

var cleanRoom = function(robot, x = 0, y = 0, dir = 0, visited = new Set()) {
  const key = createKey(x, y);
  if (visited.has(key)) {
    return;
  }
  robot.clean();
  visited.add(key);
  for (let k = 0; k < dirs.length; k++) {
    const d = (dir + k) % dirs.length;
    if (robot.move()) {
      const [di, dj] = dirs[d];
      const i = x + di;
      const j = y + dj;
      cleanRoom(robot, i, j, d, visited);
      backtrack(robot);
    }
    robot.turnRight();
  }
};

function backtrack(robot) {
  robot.turnLeft();
  robot.turnLeft();
  robot.move();
  robot.turnRight();
  robot.turnRight();
}

function createKey(x, y) {
  return x + ':' + y;
}
