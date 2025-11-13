export default function Card({ meme }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:scale-105 transition-transform">
      <img
        src={meme.url}
        alt={meme.name}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h2 className="font-semibold text-gray-700 text-center">{meme.name}</h2>
      </div>
    </div>
  );
}
