import Node from './Node'

export default function Tree({ node }) {
  return (
    <div className="flex flex-col items-center">
      <div className="flex gap-4">
        <Node data={node.person} />
        {node.spouse && <Node data={node.spouse} />}
      </div>

      {node.children.length > 0 && (
        <div className="w-px h-6 bg-gray-400"></div>
      )}

      <div className="flex gap-8">
        {node.children.map((child, i) => (
          <Tree key={i} node={child} />
        ))}
      </div>
    </div>
  )
}
