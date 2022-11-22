function createIncrement()
{
  let count = 0;
  function increment()
  {
    count++;
  }
  let message = `Count is ${count}`;
  function log()
  {
    console.log(message);
  }
  return [increment, log];
}
const [increment, log] = createIncrement()
increment();
increment();
increment();
log(); // What is logged?

// ans is "Count is 0" because it is message variable is not initialize