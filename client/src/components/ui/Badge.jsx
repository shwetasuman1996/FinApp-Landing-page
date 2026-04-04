export default function Badge({ label, variant = 'blue' }) {
  const variants = {
    blue:   'bg-blue-100 text-blue-700',
    green:  'bg-green-100 text-green-700',
    purple: 'bg-purple-100 text-purple-700',
    teal:   'bg-teal-100 text-teal-700',
    gold:   'bg-yellow-100 text-yellow-700',
    red:    'bg-red-100 text-red-600',
  }
  return (
    <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${variants[variant] ?? variants.blue}`}>
      {label}
    </span>
  )
}
