/*  
* Define o tipo das props
*/
type Props = {
    name: string;
    age: number;
    message: string;
}
                //* Atribui o tipo 'Props' as props recebidas
const Header = ({ name, age, message }: Props) => {
    return (
        <header>
            <h1>Olá {name},é bom te ver. Você tem {age} anos</h1>
            <h2>{message}</h2>
        </header>
    );
}

export default Header;
