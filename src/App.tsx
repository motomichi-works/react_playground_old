import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ExamplesAppClone from 'containers/ExamplesAppClone';
import ExamplesHoge from 'containers/ExamplesHoge';
import Home from 'containers/Home';

const App: React.VFC = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/examples-app-clone">
        <ExamplesAppClone />
      </Route>
      <Route exact path="/examples-hoge">
        <ExamplesHoge />
      </Route>
    </Switch>
  </Router>
);

export default App;
