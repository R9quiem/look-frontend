import "./Characteristics.sass"
const Characteristics = ({info,productPic}) => {
    return (
        <section className="characteristics">
            <div className="characteristics__list">
                {info.map((info, index) =>
                    <p className="characteristics__item">
                        <span className="characteristics__item__title">{info.title}</span>
                        <span className="characteristics__item__value">{info.value}</span>
                    </p>)}
            </div>
            <img src={productPic} alt="product"/>
        </section>
)}
export default Characteristics;