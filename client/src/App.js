import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext }  from '@apollo/client/link/context';



// import components
import Home from './components/Home';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Login from './pages/Login';
import Signup from './pages/SignUp';
import Profile from './pages/Profile';
import Game1 from './pages/Game1';
import Game2 from './pages/Game2';
import Game3 from './pages/Game3';
import Game4 from './pages/Game4';


const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      
        <Router>
          <div>
            <Nav />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/game1" element={<Game1 />} />
              <Route path="/game2" element={<Game2 />} />
              <Route path="/game3" element={<Game3 />} />
              <Route path="/game4" element={<Game4 />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      
    </ApolloProvider>
  );
};

export default App;
