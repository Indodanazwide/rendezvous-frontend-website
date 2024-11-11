import { Clock, Coffee, Salad, Pizza } from 'lucide-react';

const MenuPage = () => {
  const menuCategories = [
    {
      title: "Breakfast",
      icon: Coffee,
      items: [
        { name: "Classic Breakfast", description: "Eggs, bacon, toast, and grilled tomato", price: "R45" },
        { name: "Vegetarian Omelette", description: "Three eggs with mushrooms, peppers, and cheese", price: "R40" },
        { name: "Continental", description: "Assorted pastries, fruit, and yogurt", price: "R35" }
      ]
    },
    {
      title: "Main Courses",
      icon: Pizza,
      items: [
        { name: "Grilled Chicken", description: "Served with seasonal vegetables and mash", price: "R65" },
        { name: "Beef Burger", description: "Homemade patty with fresh toppings", price: "R60" },
        { name: "Pasta of the Day", description: "Chef's special pasta creation", price: "R55" }
      ]
    },
    {
      title: "Light Meals",
      icon: Salad,
      items: [
        { name: "Greek Salad", description: "Fresh vegetables with feta and olives", price: "R45" },
        { name: "Chicken Wrap", description: "Grilled chicken with fresh vegetables", price: "R50" },
        { name: "Soup of the Day", description: "Served with fresh bread", price: "R35" }
      ]
    }
  ];

  return (
    <div className="menu-page">
      <div className="container">
        {/* Hero Section */}
        <div className="hero">
          <h1>Our Menu</h1>
          <p>Crafted with passion by our student chefs</p>
        </div>

        {/* Hours Info */}
        <div className="hours-info">
          <Clock className="icon" />
          <p>Serving Wednesday-Thursday: 11AM-2PM</p>
        </div>

        {/* Menu Categories */}
        <div className="menu-grid">
          {menuCategories.map((category, index) => (
            <div key={index} className="menu-category">
              <div className="category-header">
                <category.icon className="icon" />
                <h2>{category.title}</h2>
              </div>
              <div className="menu-items">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="menu-item">
                    <div className="item-header">
                      <h3>{item.name}</h3>
                      <span className="price">{item.price}</span>
                    </div>
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="cta">
          <h2>Ready to Order?</h2>
          <p>Visit us at Steve Biko Campus or call ahead for takeaway</p>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;