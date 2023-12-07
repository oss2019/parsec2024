const SponcerCard = ({ imageUrl }) => {
  return (
    <div className="flex justify-center items-center p-2 max-w-[300px] h-56 rounded-xl bg-black/60 my-4">
      <div
        className={`flex justify-center items-center w-full h-full rounded-xl`}
      >
        <img src={imageUrl} className="w-full" />
      </div>
    </div>
  )
}

export default SponcerCard
