

const ProblemStatement = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 border-b-2 pb-4">Problem Statement</h1>
      <p>
        Implement a function that returns the sum of two numbers.
          </p>
          <pre className='bg-slate-100 mt-4 mb-4 min-h-60'>
         {`
        function sum(a, b) {
           return a + b;
        }
        `}
       </pre>
    </div>
  );
};

export default ProblemStatement;