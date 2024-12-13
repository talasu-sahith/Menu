const Categories = ({ categories, handleFilter }) => {
  return (
    <div className="btn-container">
      {categories.map((item) => (
        <button
          key={item}
          className="btn"
          type="button"
          onClick={() => handleFilter(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default Categories;
