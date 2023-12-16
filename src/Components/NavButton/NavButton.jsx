function NavButton({ content, isActive }) {
  return (
    <button
      type="button"
      className={`py-2 px-4 font-medium font-hero rounded-full hover:bg-rose-600 hover:bg-opacity-10 ${
        isActive && "text-rose-600"
      }`}
    >
      {content}
    </button>
  )
}

export default NavButton
