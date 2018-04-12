import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import data from './data';
//Elements
import Menu from './components/Menu.js';
import Order from './components/Order';



class App extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      order:[],
      food: [{
        breakfast:[{
          item: "Club Sandwich",
          price: 5,
          src: "https://vips.com.mx/wp-content/uploads/2016/05/vipsclub.jpg"
          }, 
          {
          item: "Hot cakes",
          price: 7,
          src: "https://vips.com.mx/wp-content/uploads/2016/06/0000s_0030_460_08_Hot_Cake_con_Durazno_y_Chocolate_0020_A1.jpg.jpg"
          },
          {
          item: "Huevos",
          price: 10,
          src: "https://vips.com.mx/wp-content/uploads/2018/01/rancheros.jpg"
          },
          {
          item: "Molletes",
          price: 7,
          src: "https://vips.com.mx/wp-content/uploads/2016/06/0005_454_18_A_Molletes_con_Jamon_0008.jpg.jpg"
        }],
        lunch: [{
          item: "Enchiladas",
          price: 5,
          src: "https://vips.com.mx/wp-content/uploads/2016/05/0000s_0015_454_34_A_Enchiladas_Suizas_0042.jpg.jpg"
          }, 
          {
          item: "Pozole",
          price: 7
          },
          {
          item: "Birria",
          price: 10
          },
          {
          item: "Sopes",
          price: 7
        }],
        hamburguers: [{
          item: "Queso & Tocino",
          price: 5
          }, 
          {
          item: "Pollo",
          price: 7
          },
          {
          item: "Vegetariana",
          price: 10
          },
          {
          item: "Pollo & Jamón",
          price: 7
        }],
        beverages: [{
          item: "Café americano",
          price: 5
          }, 
          {
          item: "Café con leche",
          price: 7
          },
          {
          item: "Agua",
          price: 10
          },
          {
          item: "Jugo natural",
          price: 7
        }]
      }]
    };

    this.upDateOrder=this.upDateOrder.bind(this)
  }

  upDateOrder(orders){
    this.setState({order:orders})   
    console.log(this.state);
    
  }

  render() {
    const foodOptions = this.state.food[0];
    return (
      <div className = " row">
        <Menu order={this.state.order} breakfast={foodOptions.breakfast} lunch={foodOptions.lunch} hamburguers={foodOptions.hamburguers} beverages={foodOptions.beverages} upDateOrder={this.upDateOrder}/>
        <Order order ={this.state.order } className ="col-md-4 col-lg-4 offset-md-8 offset-lg-8"/>
      </div>
    );
  }
}

export default App;