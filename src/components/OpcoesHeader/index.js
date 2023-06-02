import styled from 'styled-components';
import { Link } from 'react-router-dom';

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'ESTANTE']

const Opcoes = styled.ul`
	display: flex;
`
const Opcao = styled.ul`
	min-width: 120px;
	font-size: 16px;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	height: 100%;
	padding: 0 5px;
	cursor: pointer;
`

function OpcoesHeader() {
	return (
		<Opcoes>
			{textoOpcoes.map((texto) => (
				<Link to={`/${texto.toLowerCase()}`}><Opcao><p key={texto}>{texto}</p></Opcao></Link>
			))}
		</Opcoes>
	)
}

export default OpcoesHeader;