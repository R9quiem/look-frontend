import "./Button.sass"
const Button = ({color,size,disabled,children}) => {

    return (
        <button className={"button " + `button-color-${color} `+ `button-size-${size}`} disabled={disabled}>{children}</button>
    )
}
export default Button;