
export const Statistics = ({good, neutral, bad, total, positivePercentage, }) => {
  return (
    <div className="statisticWrapper">
      <p className="reaction">
      good: <span className="numberOf">{good}</span>
      </p>
      <p className="reaction">
      neutral: <span className="numberOf">{neutral}</span>
      </p>
      <p className="reaction">
      bad: <span className="numberOf">{bad}</span>
      </p>
      <p className="reaction">
      total: <span className="numberOf">{total}</span>
      </p>
      <p className="reaction">
      Positive feedback: <span className="numberOf">{positivePercentage}%</span>
      </p>
    </div>
  )
}