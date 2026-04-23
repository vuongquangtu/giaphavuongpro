import Node from './Node'

export default function Tree({ node }) {
  if (!node) return null

  return (
    <div className="flex flex-col items-center">
      
      {/* Couple */}
      <div className="flex items-center gap-2">
        <Node data={node.person} />

        {node.spouse && (
          <>
            {/* line nối vợ chồng */}
            <div className="w-6 h-px bg-gray-400"></div>

            <Node data={node.spouse} />
          </>
        )}
      </div>

      {/* Line xuống con */}
      {node.children.length > 0 && (
        <div className="w-px h-6 bg-gray-400"></div>
      )}

      {/* Children */}
      <div className="flex gap-8 mt-2">
        {node.children.map((child) => (
          <Tree key={child.person.id} node={child} />
        ))}
      </div>
    </div>
  )
}