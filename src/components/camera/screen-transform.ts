type Point = readonly [number, number];

/** Project a rectangular LCD plane into the photographed screen's four corners. */
export function screenTransform(corners: readonly [Point, Point, Point, Point], width: number, height: number) {
  const [[x0, y0], [x1, y1], [x2, y2], [x3, y3]] = corners;
  const dx1 = x1 - x2;
  const dx2 = x3 - x2;
  const dx3 = x0 - x1 + x2 - x3;
  const dy1 = y1 - y2;
  const dy2 = y3 - y2;
  const dy3 = y0 - y1 + y2 - y3;
  const determinant = dx1 * dy2 - dx2 * dy1;
  const g = (dx3 * dy2 - dx2 * dy3) / determinant;
  const h = (dx1 * dy3 - dx3 * dy1) / determinant;

  return `matrix3d(${[
    (x1 - x0 + g * x1) / width, (y1 - y0 + g * y1) / width, 0, g / width,
    (x3 - x0 + h * x3) / height, (y3 - y0 + h * y3) / height, 0, h / height,
    0, 0, 1, 0,
    x0, y0, 0, 1,
  ].join(",")})`;
}
