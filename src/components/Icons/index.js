import Perfil from '../../imagens/perfil.svg';
import Sacola from '../../imagens/sacola.svg';
import styled from 'styled-components';

const Icon = styled.li`
	margin-right: 40px;
	width: 25px;
`

const IconsT = styled.ul`
	display: flex;
	align-items: center;
`
const icons = [Perfil, Sacola];

function Icons() {
	return (
		<IconsT>
			{icons.map((icon) => (
				<Icon><img src={icon}></img></Icon>
			))}
		</IconsT>
	)
}

export default Icons