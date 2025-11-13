export default function Button({ children, onClick, type = "button" }) {
  return (
    <button
      onClick={onClick}
      type={type}
      className="w-full py-2 bg-linear-to-r from-yellow-600 to-yellow-400 text-black rounded-lg font-semibold hover:bg-blue-700 transition"
    >
      {children}
    </button>
  );
}
