import "./ProductDetails.sass"
import Characteristics from "../Characteristics/Characteristics";
import ProductPNG from "../../../assets/test/product.png";

const ProductDetails = ({product,activeTab,setActiveTab}) => {
    return (
        <div className="product-details">
            <nav className="product-details__switcher">
                <button
                    className={activeTab === "characteristics" ? "active" : ""}
                    onClick={() => setActiveTab("characteristics")}>Характеристики
                </button>
                <button
                    className={activeTab === "description" ? "active" : ""}
                    onClick={() => setActiveTab("description")}>Описание
                </button>
                <button
                    className={activeTab === "reviews" ? "active" : ""}
                    onClick={() => setActiveTab("reviews")}>Отзывы
                </button>
            </nav>
            {activeTab === "characteristics" &&
                <Characteristics info={product.info} productPic={ProductPNG}/>}
            {activeTab === "description" &&
                <section>2</section>}
            {activeTab === "reviews" &&
                <section>3</section>}
        </div>
    )
}
export default ProductDetails