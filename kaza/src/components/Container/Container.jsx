import PropTypes from 'prop-types';
import style from './Container.module.css'; 

const Container = ({ children }) => {
  return (
    <div className={style.container}>
      {children}
    </div>
  );
};

Container.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Container;


// une validation des types pour les props
// children: PropTypes.node.isRequired :
// PropTypes.node est utilisé pour indiquer que children peut être n'importe quel élément renderable dans React, comme des éléments, des chaînes de caractères, des nombres, ou même null.
// .isRequired indique que la prop children est obligatoire. Si vous ne voulez pas que cette prop soit obligatoire, vous pouvez simplement supprimer .isRequired.