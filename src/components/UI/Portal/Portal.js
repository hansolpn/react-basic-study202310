// portal을 사용하기 위한 import
import ReactDOM from 'react-dom';

const Portal = ({ children: renderComponent, destId }) => {
  return ReactDOM.createPortal(
    renderComponent,
    document.getElementById(destId)
  );
};

export default Portal;
