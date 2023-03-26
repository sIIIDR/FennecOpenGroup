import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import {
  ROUTE_MAINPAGE,
  ROUTE_FAQ,
  ROUTE_TEAM,
  ROUTE_CONTACTS,
  ROUTE_NOTFOUND,
  ROUTE_DOCS,
  ROUTE_VACANCY,
} from '../constants/routes';
import { Main as MainPage } from '../pages/main/Main';
import { FAQ as FAQPage } from '../pages/faq/FAQ';
import { Team as TeamPage } from '../pages/team/Team';
import { Contacts as ContactsPage } from '../pages/contacts/Сontacts';
// import { NotFound as NotFoundPage } from '../pages/notFound/NotFound';
import { Vacancy as VacancyPage } from '../pages/vacancy/Vacancy';
import { Docs as DocsPage } from '../pages/docs/Docs';
import { store } from '../reducers/store';

export const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route key={ROUTE_MAINPAGE} exact path={ROUTE_MAINPAGE} component={MainPage} />
        <Route key={ROUTE_FAQ} exact path={ROUTE_FAQ} component={FAQPage} />
        <Route key={ROUTE_TEAM} exact path={ROUTE_TEAM} component={TeamPage} />
        <Route key={ROUTE_CONTACTS} exact path={ROUTE_CONTACTS} component={ContactsPage} />
        <Route key={ROUTE_DOCS} exact path={ROUTE_DOCS} component={DocsPage} />
        <Route key={ROUTE_VACANCY} exact path={ROUTE_VACANCY} component={VacancyPage} />
        <Route key={ROUTE_NOTFOUND} path="*" component={MainPage} />
      </Switch>
    </BrowserRouter>
  </Provider>
);
