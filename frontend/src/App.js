/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable import/no-anonymous-default-export */
import React, { Suspense, lazy } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect }from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { createStore } from 'redux'
import { useSelector } from 'react-redux';
import { rootReducer } from './reducer/rootReducer';
import { QueryClient, QueryClientProvider } from 'react-query'
import { persistStore, persistReducer } from 'redux-persist'
import { Provider } from 'react-redux'
import storageSession from 'redux-persist/lib/storage/session'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import { PersistGate } from 'redux-persist/integration/react'
import { ReactQueryDevtools } from 'react-query/devtools'

const Login = lazy(() => import ('./Onboarding/Login'))
const ForgotPassword = lazy(() => import ('./Onboarding/ForgotPassword'))
const SignUp= lazy(() => import ('./Onboarding/signUp'))
const Home= lazy(() => import ('./Dashboard/home'))
const AdminManagement = lazy(() => import ('./Dashboard/adminManagement'))
const CompanyManagement = lazy(() => import ('./Dashboard/companyManagement'))
const employeeManagement = lazy(() => import ('./Dashboard/employeeManagement'))
const Contracts = lazy(() => import ('./Dashboard/contracts'))
const LeavePolicy = lazy(() => import ('./Dashboard/leavePolicy'))
const LeaveRequest = lazy(() => import ('./Dashboard/leaveRequest'))
const Forms= lazy(() => import ('./Dashboard/forms'))

function App() {
  const { isLogged} = useSelector((state) => state.LoginReducer)

  // const { user} = userData;
  // const roles = user?.roles

  const redirect = () => {
    return <Redirect to='/' />
  }

  return (
   <Router>
     <Suspense fallback={null}>
      <Switch>
       <Route exact path='/' component={Login}/>
       <Route exact path='/forgotPassword' component={ForgotPassword}/>
       <Route exact path='/signUp' component={SignUp}/>
       {!isLogged ? ( redirect()) :  (
       <Switch>
       <Route exact path='/home' component={Home}/>
       <Route exact path='/adminManagement' component={AdminManagement}/>
       <Route exact path='/companyManagement' component={CompanyManagement}/>
       <Route exact path='/employeeManagement' component={employeeManagement}/>
       <Route exact path='/contracts' component={Contracts}/>
       <Route exact path='/leave' component={LeavePolicy}/>
       <Route exact path='/leaveRequest' component={LeaveRequest}/>
       <Route exact path='/forms' component={Forms}/>
      </Switch>)
      }
      </Switch>
     </Suspense>
   </Router>
  );
}

const persistConfig = {
	key: 'root',
	storage: storageSession,
	stateReconciler: autoMergeLevel2,
	blacklist: ['RegisterReducer'],
}


const persistedReducer = persistReducer(persistConfig, rootReducer)
let store = createStore(persistedReducer)
let persistor = persistStore(store)
const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
})

export default  () => {
  return(
    <QueryClientProvider client ={queryClient}>
      <ChakraProvider>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
           <App/>
          </PersistGate>
        </Provider>
        </ChakraProvider>
        <ReactQueryDevtools initialIsOpen={false}/>
    </QueryClientProvider>
   
  )
};
