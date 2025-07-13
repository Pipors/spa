export const Part = ({ text, value }) => <p>{text} {value}</p>

export const Header = ({ text }) => <h1>{text}</h1>

export const Button = (props) => <button onClick={props.onClick}> {props.text}</button>