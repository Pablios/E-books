import Logo from '../Logo';
import OpcoesHeader from '../OpcoesHeader';
import Icons from '../Icons';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
	background-color: #fff;
	display: flex;
	justify-content: center;
`

function Header() {
	return (
		<HeaderContainer>
			<Link to="/">
				<Logo />
			</Link>
			<OpcoesHeader />
			<Icons />
		</HeaderContainer>
	)
}

export default Header