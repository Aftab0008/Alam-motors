export function Button({ className = "", children, ...props }) {
  return (
    <button
      className={`px-4 py-2 bg-red-800 text-white rounded-md hover:bg-red-900 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
