import "./ShopCategorySelector.sass"

function ShopCategorySelector({ selectedCategory, setSelectedCategory }) {
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);

  };
  return (
    <nav className="category-selector">
      <button
        className={selectedCategory === 'second-hand' ? 'active' : ''}
        onClick={() => handleCategoryChange('second-hand')}
      >Секонды</button>
      <button
        className={selectedCategory === 'designer-clothing' ? 'active' : ''}
        onClick={() => handleCategoryChange('designer-clothing')}
      >Дизайнерская одежда</button>
      <button
        className={selectedCategory === 'vintage' ? 'active' : ''}
        onClick={() => handleCategoryChange('vintage')}
      >Винтажные вещи</button>
      <button
        className={selectedCategory === 'our-merch' ? 'active' : ''}
        onClick={() => handleCategoryChange('our-merch')}
      >Наш мерч</button>
    </nav>
  )
}

export default ShopCategorySelector;

