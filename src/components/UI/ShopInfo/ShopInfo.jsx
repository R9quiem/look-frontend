import "./ShopInfo.sass"
import Button from "../Button/Button";

const ShopInfo = ({shop}) => {
    return (
        <section className="shop">
            <div className="shop__wrapper">
                <img alt="shop-logo"/>
                <div className="shop__info">
                    <h1>name</h1>
                    <div>rating</div>
                    <div>subs</div>
                </div>
            </div>
            <div className="shop__buttons">
                <Button size="small" color="black">Написать</Button>
                <Button size="small" color="black">+ Подписаться</Button>
            </div>
        </section>
    )
}
export default ShopInfo;