import './App.scss';
import BaseComponent from './BaseComponent';

function App() {
  // routes go here usually, so we're going to create a BaseComponent

  return (
    <div className="app-container">
      <BaseComponent />
      <div className="visible-phone">
        <p>
          This page is best viewed on larger screens (tablet or bigger).
        </p>
      </div>
    </div>
  );
}

export default App;
