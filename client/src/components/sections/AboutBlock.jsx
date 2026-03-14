export function AboutBlock({ title, text }) {
  return (
    <div>
      <h3 className="text-2xl font-semibold text-indigo-200 mb-2">
        {title}
      </h3>
      <p className="text-white/80 leading-relaxed text-md">
        {text}
      </p>
    </div>
  )
}
