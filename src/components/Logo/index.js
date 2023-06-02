import logo from '../../imagens/logo.svg';
import styled from 'styled-components';

const LogoContainer = styled.div`
	display: flex;
	font-size: 30px;
`

const ImgContainer = styled.img`
	margin-right: 10px;
`

function Logo() {
	return (
		<LogoContainer>
			<ImgContainer
				src={logo}
				alt='logo'
			/>

			<p><strong>Books</strong></p>
		</LogoContainer>
	)
}

export default Logo;