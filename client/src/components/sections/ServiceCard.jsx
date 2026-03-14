import { Link } from "react-router-dom";

export function ServiceCard({ image, title, desc, link }) {
  const Wrapper = link ? Link : "div";

  return (
    <Wrapper
      to={link}
      className={`group relative rounded-2xl bg-gradient-to-b from-black to-gray-900
                  shadow-lg hover:shadow-2xl
                  transition-all duration-500
                  hover:-translate-y-2
                  overflow-hidden
                  ${link ? "cursor-pointer" : ""}`}
    >
      {/* Image Section */}
      <div className="h-48 w-full bg-gradient-to-b from-black to-gray-900 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover
                     transition-transform duration-500
                     group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-6 bg-gradient-to-b from-black to-gray-900">
        <h3 className="text-lg font-semibold mb-2 text-white">
          {title}
        </h3>

        <p className="text-sm text-white leading-relaxed">
          {desc}
        </p>
      </div>

      {/* Premium hover outline */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl
                   ring-1 ring-transparent
                   group-hover:ring-indigo-500/40 transition"
      />
    </Wrapper>
  );
}
