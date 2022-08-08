import React from "react"
import { AiFillGithub, AiFillMessage, AiFillLinkedin } from "react-icons/ai"
import {
	Section,
	SectionDivider,
	SectionText,
	SectionTitle,
} from "../../styles/GlobalComponents"

import { SocialIcons } from "../Header/HeaderStyles"
import {
	CompanyContainer,
	FooterWrapper,
	LinkColumn,
	LinkItem,
	LinkList,
	LinkTitle,
	Slogan,
	SocialContainer,
	SocialIconsContainer,
} from "./FooterStyles"

const Footer = () => {
	return (
		<FooterWrapper id="contact">
			<SectionDivider />
			<Section nopadding>
				<br />
				<SectionTitle>Contato</SectionTitle>
				<SectionText>
					Se desejar conversar mais e trocar ideias meus contatos são:
				</SectionText>

				<LinkColumn>
					<LinkItem href="mailto:raquelcarvalhosj@gmail.com">
						raquelcarvalhosj@gmail.com
					</LinkItem>
				</LinkColumn>

				<div>
					<SocialIcons href="https://github.com/RaquelCAndrade">
						<AiFillGithub size="3rem" />
					</SocialIcons>
					<SocialIcons href="https://www.linkedin.com/in/raquel-carvalho-andrade/">
						<AiFillLinkedin size="3rem" />
					</SocialIcons>
					<SocialIcons href="https://api.whatsapp.com/send?phone=+5531986039844&text=Ol%C3%A1%2C%20venho%20por%20meio%20do%20seu%20portf%C3%B3lio%20na%20internet%2C%20gostaria%20de%20conhecer%20melhor%20seus%20servi%C3%A7os">
						<AiFillMessage size="3rem" />
					</SocialIcons>
				</div>
			</Section>
		</FooterWrapper>
	)
}

export default Footer
