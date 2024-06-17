import CodeEditor from './Components/CodeEditor';
import ProblemStatement from './Components/ProblemStatement';


function App() {

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="container mx-auto bg-white rounded-lg shadow-lg p-4 flex flex-col lg:flex-row">
        <div className="lg:w-1/2 lg:border-r lg:border-gray-200 p-4">
          <ProblemStatement />
        </div>
        <div className="lg:w-1/2 p-4">
          <CodeEditor />
        </div>
      </div>
    </div>
    </>
  )
}

export default App
