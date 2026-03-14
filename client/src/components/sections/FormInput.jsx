export function FormInput({ label, placeholder }) {
  return (
    <div className="mb-8">
      <label className="block text-sm font-semibold text-indigo-900 mb-2">
        {label} *
      </label>

      <input
        type="text"
        placeholder={placeholder}
        className="w-full bg-transparent border-b border-indigo-900/30 focus:border-indigo-900 outline-none py-2 text-indigo-900 placeholder:text-indigo-900/40 transition"
      />
    </div>
  )
}
