import './button.scss'

const Button_Type = {
    google: 'google-sign-in',
    inverted: 'inverted'
}

const Button = ({ children, buttonType, ...otherProps }) => {
    return (
        <button className={`button-container ${Button_Type[buttonType]}`} {...otherProps}>
            {children}
        </button>
    )
}

export default Button;