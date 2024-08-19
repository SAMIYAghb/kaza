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
      {/* <div className={`${style.collapseBody} ${isOpen ? style.animation : style.animationReverse}`}> */}
        <p className={style.collapseText}>{content}</p>
      </div>
      
    </div>
  )
}
Collapse.propTypes = {
  id: PropTypes.node.isRequired,
  title: PropTypes.node.isRequired,
  content: PropTypes.node.isRequired,
};
export default Collapse
