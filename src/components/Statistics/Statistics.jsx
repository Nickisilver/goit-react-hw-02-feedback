import PropTypes from 'prop-types';
import css from './Statistics.module.css'

export const Statistics = ({good, neutral, bad, total, positivePercentage, }) => {
  return (
    <div className={css.statisticWrapper}>
      <p className={css.reaction}>
      good <span className={css.numberOf}>{good}</span>
      </p>
      <p className={css.reaction}>
      neutral <span className={css.numberOf}>{neutral}</span>
      </p>
      <p className={css.reaction}>
      bad <span className={css.numberOf}>{bad}</span>
      </p>
      <p className={css.reaction}>
      total <span className={css.numberOf}>{total}</span>
      </p>
      <p className={css.reaction}>
      Positive feedback <span className={css.numberOf}>{positivePercentage}%</span>
      </p>
    </div>
  )
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
}