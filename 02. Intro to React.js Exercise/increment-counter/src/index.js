import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(App(), document.getElementById('root'));
const rerender = ReactDOM.render;
export default rerender; 