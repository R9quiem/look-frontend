import {NavLink} from "react-router-dom";


function ShopCategorySelector({ selectedCategory, setSelectedCategory }) {
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };
  return (
    <nav>
      <button onClick={() => handleCategoryChange('vintage')}>Vintage</button>
      <button onClick={() => handleCategoryChange('second-hand')}>Second Hand</button>
      <button onClick={() => handleCategoryChange('our-merch')}>Our Merch</button>
      <button onClick={() => handleCategoryChange('designer-clothing')}>Designer Clothing</button>
    </nav>
  )
}

export default ShopCategorySelector;

