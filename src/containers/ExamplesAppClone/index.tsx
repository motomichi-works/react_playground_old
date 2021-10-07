import logo from 'images/logo.svg';
import './index.css';

const AppClone: React.VFC = () => (
  <div className="AppClone">
    <header className="AppClone-header">
      <img src={logo} className="AppClone-logo" alt="logo" />
      <p>
        Edit <code>src/components/examples/app-clone/AppClone.tsx</code> and
        save to reload.
      </p>
      <a
        className="AppClone-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  </div>
);

export default AppClone;
