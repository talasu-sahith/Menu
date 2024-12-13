const MenuItem = ({ id, title, category, price }) => {
  return (
    <div className="menu-item">
      <h2 className="menu-item">This is {category}</h2>
    </div>
  );
};

export default MenuItem;
