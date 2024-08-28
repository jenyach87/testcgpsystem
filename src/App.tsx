import './App.css'
import Preview from './components/Preview/Preview';
import Sidebar from './components/Siadebar/Sidebar';
import Workspace from './components/WorkSpace/WorkSpace';

function App() {

  return (
    <div className="flex  min-h-screen w-full">
      <div className="w-1/4">
        <Sidebar />
      </div>
      <div>
        <Workspace />
      </div>
      <div className='w-full'>
        <Preview/>
      </div>
    </div>
  )
}

export default App
