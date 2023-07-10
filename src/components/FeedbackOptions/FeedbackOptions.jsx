import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css'
export const FeedbackOptions = ({options, onClick}) => {
  return (
    <div className={css.btnWrapper}>
     {options.map(option =>(
      <button className={css.btn}
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

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onClick: PropTypes.func.isRequired,
}