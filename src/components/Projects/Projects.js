import React from "react"

import {
	BlogCard,
	CardInfo,
	ExternalLinks,
	GridContainer,
	HeaderThree,
	Hr,
	Tag,
	TagList,
	TitleContent,
	UtilityList,
	Img,
} from "./ProjectsStyles"
import {
	Section,
	SectionDivider,
	SectionTitle,
} from "../../styles/GlobalComponents"
import { projects } from "../../constants/constants"

const Projects = () => (
	<Section nopadding id="projects">
		<SectionDivider />
		<SectionTitle main>Meus Projetos</SectionTitle>
		<GridContainer>
			{projects.map((project) => (
				<BlogCard key={project.id}>
					<Img src={project.image} alt={project.title} />
					<TitleContent>
						<HeaderThree title>{project.title}</HeaderThree>
						<Hr />
						<CardInfo>{project.description}</CardInfo>
					</TitleContent>
					<div>
						<TitleContent title>
							Tecnologias Principais
						</TitleContent>
						<TagList>
							{project.tags.map((tag, i) => (
								<Tag key={i}>{tag}</Tag>
							))}
						</TagList>
					</div>
					<UtilityList>
						<ExternalLinks href={project.visit}>
							Aplicação
						</ExternalLinks>
						<ExternalLinks href={project.source}>
							Código
						</ExternalLinks>
					</UtilityList>
				</BlogCard>
			))}
		</GridContainer>
	</Section>
)

export default Projects
