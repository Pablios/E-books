import Input from '../Input'
import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { getLivros } from '../../services/livros'
import { postFavoritos } from '../../services/favoritos'


const PesquisaContainer = styled.section`
	background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
	color: #FFF;
	text-align: center;
	padding: 85px 0;
	height: 270px;
	width: 100%;
`
const Titulo = styled.h2`
	color: #FFF;
	font-size: 36px;
	text-align: center;
	width: 100%;
`
const SubTitulo = styled.h3`
	font-size: 16px;
	font-weight: 500;
	margin-bottom: 40px;
`
const Resultados = styled.div`
	display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;

	p {
        width: 200px;
    }

	img {
        width: 100px;
    }

	&:hover {
        border: 1px solid white;
    }
`

function Pesquisa() {
	const [livrosPesquisados, setLivrosPesquisados] = useState([])
	const [livros, setLivros] = useState([])

	useEffect(() => {
		fetchLivros()
	}, [])

	async function fetchLivros() {
		const livrosDaApi = await getLivros()
		setLivros(livrosDaApi)
	}

	async function insertFavorito(id) {
		await postFavoritos(id)
		alert(`livro de id:${id} inserido`)
	}

	return (
		<PesquisaContainer>
			<Titulo>Já sabe por onde começar?</Titulo>
			<SubTitulo>Encontrou seu livro em nosso estande.</SubTitulo>
			<Input
				placeholder="Escreva sua próxima leitura"
				onBlur={evento => {
					const textoDigitado = evento.target.value
					const resultadoPesquisa = livros.filter(livro => livro.nome.includes(textoDigitado))
					setLivrosPesquisados(resultadoPesquisa)
				}}
			/>
			{livrosPesquisados.map(livro => (
				<Resultados onClick={() => insertFavorito(livro.id)}>
					<p>{livro.nome}</p>
					<img src={livro.src} />
				</Resultados>
			))}
		</PesquisaContainer>
	)
}

export default Pesquisa