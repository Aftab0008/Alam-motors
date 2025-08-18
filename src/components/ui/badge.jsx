export function Badge({ variant = "default", className = "", children }) {
  const base = "inline-flex items-center px-2 py-0.5 rounded text-xs font-medium";
  const variants = {
    default: "bg-gray-100 text-gray-800",
    secondary: "bg-red-100 text-red-800",
  };
  return <span className={`${base} ${variants[variant] || variants.default} ${className}`}>{children}</span>;
}
