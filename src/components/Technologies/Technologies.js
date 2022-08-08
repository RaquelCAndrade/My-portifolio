import React from "react"
import { DiFirebase, DiReact, DiZend } from "react-icons/di"
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
} from "./TechnologiesStyles"

const Technologies = () => (
	<Section id="tech">
		<SectionDivider />
		<br />
		<SectionTitle>Tecnologias</SectionTitle>
		<SectionText>
			Na primeira parte do curso de Desenvolvimento Web Full Stack da
			Kenzie Academy Brasil aprendi uma variedade de tecologias voltadas
			para Front-End. Atualmente, estou estudando as tecnologias de
			Back-End mais requisitadas pelo mercado.
		</SectionText>
		<List>
			<ListItem>
				<DiReact size="3rem" />
				<ListContainer>
					<ListTitle>Front-End</ListTitle>
					<ListParagraph>
						HTML <br />
						CSS <br />
						Javascript <br />
						React
					</ListParagraph>
				</ListContainer>
			</ListItem>
			<ListItem>
				<DiFirebase size="3rem" />
				<ListContainer>
					<ListTitle>Back-End</ListTitle>
					<ListParagraph>
						Node.js <br />
						Express <br />
						PostgrSQL <br />
						Docker
					</ListParagraph>
				</ListContainer>
			</ListItem>
		</List>
	</Section>
)

export default Technologies
