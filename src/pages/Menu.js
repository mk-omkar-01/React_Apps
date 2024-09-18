import React from 'react';
import '../styles/Menu.css'; // Importing the CSS file

const Menu = () => {
  return (
    <div className="menu-container">
      <h1>Our Menu</h1>
      <p>Explore our delicious offerings, made with fresh ingredients and crafted with love.</p>
      
      <div className="menu-categories">
        <h2>Starters</h2>
        <ul>
          <li>
            <div className="menu-item">
              <span className="item-name">Bruschetta</span>
              <span className="item-price">$8.50</span>
            </div>
            <p className="item-description">Toasted bread topped with diced tomatoes, basil, and olive oil.</p>
          </li>
          <li>
            <div className="menu-item">
              <span className="item-name">Caesar Salad</span>
              <span className="item-price">$7.00</span>
            </div>
            <p className="item-description">Crisp romaine lettuce with Caesar dressing, croutons, and parmesan.</p>
          </li>
        </ul>
        
        <h2>Main Courses</h2>
        <ul>
          <li>
            <div className="menu-item">
              <span className="item-name">Grilled Salmon</span>
              <span className="item-price">$15.99</span>
            </div>
            <p className="item-description">Freshly grilled salmon served with steamed vegetables and rice.</p>
          </li>
          <li>
            <div className="menu-item">
              <span className="item-name">Chicken Alfredo</span>
              <span className="item-price">$13.50</span>
            </div>
            <p className="item-description">Creamy Alfredo sauce over fettuccine noodles with grilled chicken.</p>
          </li>
        </ul>
        
        <h2>Desserts</h2>
        <ul>
          <li>
            <div className="menu-item">
              <span className="item-name">Chocolate Lava Cake</span>
              <span className="item-price">$6.50</span>
            </div>
            <p className="item-description">Warm chocolate cake with a gooey center, served with vanilla ice cream.</p>
          </li>
          <li>
            <div className="menu-item">
              <span className="item-name">Tiramisu</span>
              <span className="item-price">$5.99</span>
            </div>
            <p className="item-description">Classic Italian dessert made with layers of coffee-soaked ladyfingers and mascarpone cheese.</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
