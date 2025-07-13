export const StatisticLine = ({ text, value }) => (
    <tr>
        <th> {text}</th>
        <td> {value} </td>
    </tr>  
)

export const Header = ({ text }) => <h1>{text}</h1>

export const Button = (props) => <button onClick={props.onClick}> {props.text}</button>

