import { Redirect, Route, Switch } from "react-router-dom";

import { ROUTES } from "./constants/routes";
import Layout from "./components/Layout";
import {
  DashboardPage,
  Performance,
  EmployeeContact,
  Material_table
} from "./pages";
import Man from "./Employee_contact_details/components/Man"

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact render={() => <Redirect to={ROUTES.main} />} />
        <Route exact path={ROUTES.main} component={DashboardPage} />
        <Route exact path={ROUTES.Performance} component={Performance} />
        <Route exact path={ROUTES.EmployeeContact} component={EmployeeContact} />
        <Route exact path={ROUTES.Material_table} component={Material_table} />
        <Route exact path={ROUTES.Man} component={Man} />
      </Switch>
    </Layout>
  );
}

export default App;