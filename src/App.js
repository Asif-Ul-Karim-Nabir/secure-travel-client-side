import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Home/Header/Header';
import Plans from './Pages/Home/Plans/Plans';
import SinglePlan from './Pages/Home/SinglePlan/SinglePlan';
import Footer from './Pages/Footer/Footer';
import Login from './Pages/Login/Login/Login';
import AddPlan from './Pages/Login/AddPlan/AddPlan';
import MyOrder from './Pages/Login/MyOrder/MyOrder';
import AuthProvider from './Pages/contexts/AuthProvider';
import PrivateAuth from './Pages/Login/PrivateAuth/PrivateAuth';
import NotFound from './Pages/Home/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/plans">
            <Plans></Plans>
          </Route>
          <PrivateAuth exact path="/plans/:_id">
            <SinglePlan></SinglePlan>
          </PrivateAuth>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/add-Plan">
            <AddPlan></AddPlan>
          </Route>
          <Route exact path="/orders">
            <MyOrder></MyOrder>
          </Route>
          <Route exact path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
