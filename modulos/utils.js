// es modules / commonjs

const calculator = () => {
    let result = 0
  
    const sumar = num => (
      result += num
    )
    const restar = num => (
      result -= num
    )
    const multiplicar = num => {
      return result *= num
    }
    const dividir = num => result /= num
    const total = () => result
  
    return { sumar, restar, multiplicar, dividir, total }
  
  };
  // 1
  export default calculator; // Export default solo se puede usar una vez
  // module.exports = calculator
  // 2
  // module.exports = { sumScores, INIT_CALCULATOR };
  export const sumScores = (scores) => { // Export se puede usar tantas veces como queramos
    return scores.reduce((sum, course) => sum + course.score, 0);
  };
  
  export const INIT_CALCULATOR = 0;