import style from './Collapse.module.css'
import arrow from '../../assets/arrow_back.png'
import { useState } from 'react';
import PropTypes from 'prop-types';

const Collapse = ({ title, content}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={style.collapse}>
      <div className={style.collapseHeader} onClick={toggleCollapse} >
        <h3 className={style.collapseTitle}>{title}</h3>
        <span >
          <img src={arrow} alt={title} className={isOpen ? style.collapseImgOpen : style.collapseImg}/>
        </span>
      </div>
      <div className={`${style.collapseBody} ${isOpen ? style.collapseBodyIsOpen : ''}`}>
        {Array.isArray(content) ? (
          <ul className={style.collapseList}>
            {content.map((item, index) => (
              <li key={index} className={style.collapseListItem}>
                {item}
              </li>
            ))}
          </ul>
        ) : (
          <p className={style.collapseText}>{content}</p>
        )}
      </div>
      
    </div>
  )
}
Collapse.propTypes = {
  title: PropTypes.node.isRequired,
  content: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string,
  ]).isRequired,
};
export default Collapse
