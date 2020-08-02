import React, { Component } from 'react';
import Banner from './Banner';
import SplitBar from './SplitBar';
import ProductList1 from './ProductList1';
import ProductList2 from './ProductList2';

class Content extends Component {
  render() {
    return (
      <main role="main" className="content-area">
        <Banner/>
        <SplitBar title={"CỬA CÁCH ÂM"}/>
        <ProductList1/>
        <SplitBar title={"NHÔM VIỆT PHÁP"}/>
        <ProductList2/>
        <SplitBar title={"NHÔM XINGFA"}/>
        <ProductList1/>
        <SplitBar title={"KÍNH CƯỜNG LỰC"}/>
        <ProductList2/>
      </main>
    );
  }
}

export default Content;