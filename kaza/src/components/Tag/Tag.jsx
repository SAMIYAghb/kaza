import style from '../../pages/House/House.module.css';
import PropTypes from 'prop-types';


const Tag = ({tag}) => {
  return (
    <div className={style.tags}>
      <div className={style.tag}>{tag}</div>
    </div>
  )
}
Tag.propTypes = {
  tag: PropTypes.node.isRequired,
};
export default Tag
