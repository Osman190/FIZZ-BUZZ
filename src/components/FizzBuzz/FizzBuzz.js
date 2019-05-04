import Displayed from "../Displayed/Displayed.js";

const FizzBuzz = (WrappedComponent, num) => {
  if (num % 3 === 0 && num % 5 === 0) {
    return Displayed(WrappedComponent, "FizzBuzz");
  } else if (num % 3 === 0) {
    return Displayed(WrappedComponent, "Fizz");
  } else if (num % 5 === 0) {
    return Displayed(WrappedComponent, "Buzz");
  } else {
    return Displayed(WrappedComponent, num);
  }
};

export default FizzBuzz;
