import React from "react"

import {
	Section,
	SectionDivider,
	SectionText,
	SectionTitle,
} from "../../styles/GlobalComponents"
import {
	List,
	ListContainer,
	ListItem,
	ListParagraph,
	ListTitle,
} from "../Technologies/TechnologiesStyles"

// import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles"

// const data = [
// 	{ number: 20, text: "Open Source Projects" },
// 	{ number: 1000, text: "Students" },
// 	{ number: 1900, text: "Github Followers" },
// 	{ number: 5000, text: "Github Stars" },
// ]

const Acomplishments = () => (
	<Section id="exp">
		<SectionDivider />
		<br />
		<SectionTitle>Experiêcias</SectionTitle>
		<SectionText>
			Uma das coisas que mais amo na Kenzie é que o estudo é feito
			simulando o dia a dia de trabalho, com sprints e prazos definidos. É
			possível ganhar experiência enquanto aprendo as tecnologias e
			aprimoro as habilidades sociais necessárias para um desenvolvedor.{" "}
			<br /> Duas principais oportunidades que tive:
		</SectionText>
		<List>
			<ListItem>
				<ListContainer>
					<ListTitle>Scrum Master</ListTitle>
					<ListParagraph>
						Atuei como scrum master nos dois trabalhos finais de
						módulo. Usei ferramentas, como trello, para auxiliar a
						organização do trabalho da equipe. Além de conduzir
						dailys para alinhar tarefas diárias.
					</ListParagraph>
				</ListContainer>
			</ListItem>
			<ListItem>
				<ListContainer>
					<ListTitle>Coach(Monitora)</ListTitle>
					<ListParagraph>
						Como coach(monitora) na Kenzie academy ajudo novos devs
						a sanar dúvidas, corrigo atividades e passo feedbacks. O
						trabalho de coach me ajudou a melhorar minha habilidade
						de ler códigos e ampliar a visão de que na programação
						existem muitas formas de resolver o mesmo problema. O
						contato ativo com os alunos também me permite praticar a
						comunicação e a forma de transmitir ideias.
					</ListParagraph>
				</ListContainer>
			</ListItem>
		</List>
	</Section>
)

export default Acomplishments
