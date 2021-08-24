import Point from './Point';

export default function(center, radius) {
  // console.log(radius);
  return {
    center,
    radius,
    getCircumference() {
      return 2 * radius * Math.PI;
    },
    getArea() {
      return radius ** 2 * Math.PI;
    },
    includes(Point) {
      // TODO: write your code here
      //Not an ideal answer but we take the hypotenuse of the of point in relation to the center then
      //simple compare the length with of the hypotenuse with the radius. (pythagorean theorem)
      //for tangential, tan is essentially the hypoteuse if we think about sin as one side of a right triangle.
      //sin and cos are important as they serve as "steps" in the y and x axis' respectively
      let c = (Math.abs(center.x-Point.x))**2 + Math.abs(center.y-Point.y)**2;
      c= Math.sqrt(c);
      return c<=radius;
    }
  }
}
