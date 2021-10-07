import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ExamplesAppClone from 'containers/ExamplesAppClone';
import ExamplesHoge from 'containers/ExamplesHoge';
import Home from 'containers/Home';
import RiakutoChapter08 from 'containers/RiakutoChapter08';
import paths from 'settings/paths';

const App: React.FC = () => (
  <Router>
    <Switch>
      <Route exact path={paths.home}>
        <Home />
      </Route>
      <Route exact path={paths.examplesAppClone}>
        <ExamplesAppClone />
      </Route>
      <Route exact path={paths.examplesHoge}>
        <ExamplesHoge />
      </Route>
      <Route exact path={paths.riakutoChapter08}>
        <RiakutoChapter08 />
      </Route>
    </Switch>
  </Router>
);

export default App;
