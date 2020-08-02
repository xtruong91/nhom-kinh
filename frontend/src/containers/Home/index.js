import React from 'react';
import Header from '../../components/Home/Header';
import Content from '../../components/Home/Content';
import Footer from '../../components/Home/Footer';



class Home extends React.Component {
  render() {
    return (
      <div id="wrapper">
        <Header/>
        <Content/>
        <Footer/>
      </div>
    );
  }
}

export default (Home);
