export default function Node({ data }) {
  return (
    <div className="bg-gray-800 text-white rounded-xl p-3 w-40 text-center shadow-lg hover:scale-105 transition">
      <img
        src={data.avatar || "https://i.pravatar.cc/100"}
        className="w-12 h-12 rounded-full mx-auto mb-2"
      />
      <div className="font-bold">{data.name}</div>
      <div className="text-sm text-gray-400">{data.birth}</div>
    </div>
  )
}
