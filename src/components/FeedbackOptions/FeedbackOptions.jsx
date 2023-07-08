

export const FeedbackOptions = ({options, onClick}) => {
  return (
    <div className="btnWrapper">
     {options.map(option =>(
      <button 
      key = {option}
      name = {option}
      type="button"
      onClick={()=>onClick(option)}
      >
      {option}
      </button>
     ))}
    </div>
  )
}