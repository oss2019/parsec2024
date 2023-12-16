function NavTile({ content, isActive, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`py-4 px-6 w-full font-medium font-hero  hover:bg-rose-600 hover:bg-opacity-10 ${
        isActive && "text-rose-600"
      } text-left`}
    >
      {content}
    </button>
  )
}

export default NavTile
