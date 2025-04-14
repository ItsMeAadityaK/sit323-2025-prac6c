const express = require('express');
const app = express();
const port = 3000;

// Middleware to validate numbers
const Numbers = (req, res, next) => {
    const { num1, num2 } = req.query;
  
    if (num1 === undefined || num2 === undefined) {
      return res.status(400).json({ error: "Missing parameters. Please provide both 'num1' and 'num2'." });
    }
  
    if (isNaN(num1) || isNaN(num2)) {
      return res.status(400).json({ error: "Invalid input. Please provide two valid numbers." });
    }
  
    next();
  };
  

// Addition
app.get('/add', Numbers, (req, res) => {
  const result = parseFloat(req.query.num1) + parseFloat(req.query.num2);
  res.json({ result });
});

// Subtraction
app.get('/subtract', Numbers, (req, res) => {
  const result = parseFloat(req.query.num1) - parseFloat(req.query.num2);
  res.json({ result });
});

// Multiplication
app.get('/multiply', Numbers, (req, res) => {
  const result = parseFloat(req.query.num1) * parseFloat(req.query.num2);
  res.json({ result });
});

// Division
app.get('/divide', Numbers, (req, res) => {
  if (parseFloat(req.query.num2) === 0) {
    return res.status(400).json({ error: "Cannot divide by zero." });
  }
  const result = parseFloat(req.query.num1) / parseFloat(req.query.num2);
  res.json({ result });
});

// Exponentiation: base^exponent
app.get('/power', (req, res) => {
    const { base, exponent } = req.query;
  
    if (base === undefined || exponent === undefined) {
      return res.status(400).json({ error: "Missing parameters. Please provide 'base' and 'exponent'." });
    }
  
    if (isNaN(base) || isNaN(exponent)) {
      return res.status(400).json({ error: "Invalid input. 'base' and 'exponent' must be valid numbers." });
    }
  
    const result = Math.pow(parseFloat(base), parseFloat(exponent));
    res.json({ result });
  });
  
  
  // Square Root
  app.get('/sqrt', (req, res) => {
    const { num } = req.query;
  
    if (num === undefined) {
      return res.status(400).json({ error: "Missing parameter. Please provide 'num'." });
    }
  
    const number = parseFloat(num);
    if (isNaN(number)) {
      return res.status(400).json({ error: "Invalid input. 'num' must be a number." });
    }
  
    if (number < 0) {
      return res.status(400).json({ error: "Cannot compute square root of a negative number." });
    }
  
    const result = Math.sqrt(number);
    res.json({ result });
  });
  
  
  // Modulo
  app.get('/modulo', (req, res) => {
    const { num1, num2 } = req.query;
  
    if (num1 === undefined || num2 === undefined) {
      return res.status(400).json({ error: "Missing parameters. Please provide both 'num1' and 'num2'." });
    }
  
    if (isNaN(num1) || isNaN(num2)) {
      return res.status(400).json({ error: "Invalid input. Please provide valid numbers." });
    }
  
    if (parseFloat(num2) === 0) {
      return res.status(400).json({ error: "Cannot perform modulo with divisor zero." });
    }
  
    const result = parseFloat(num1) % parseFloat(num2);
    res.json({ result });
  });
  
  
// Start the server
app.listen(port, () => {
  console.log(`Calculator microservice running at http://localhost:${port}`);
});
