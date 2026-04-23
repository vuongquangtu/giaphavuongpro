import data from './data/family.json'
import { buildFamily } from './utils/buildFamily'
import Tree from './components/Tree'

function App() {
  const tree = buildFamily(data)

  return (
    <div className="text-white p-4">
      <h1 className="text-center text-2xl mb-6">Gia Phả Họ Vương</h1>
      <Tree node={tree} />
    </div>
  )
}

export default App
