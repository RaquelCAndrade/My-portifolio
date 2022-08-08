import Link from "next/link"
import React from "react"
import { AiFillGithub, AiFillMessage, AiFillLinkedin } from "react-icons/ai"
import { DiCssdeck } from "react-icons/di"

import {
	Container,
	Div1,
	Div2,
	Div3,
	NavLink,
	SocialIcons,
	Span,
} from "./HeaderStyles"

const Header = () => (
	<Container>
		<Div1>
			<Link href="/">
				<a
					style={{
						display: "flex",
						alignItens: "center",
						color: "white",
						marginBottom: "20px",
					}}
				>
					<DiCssdeck size="3rem" /> <Span>Portifolio</Span>
				</a>
			</Link>
		</Div1>
		<Div2>
			<li>
				<Link href="#projects">
					<NavLink>Projetos</NavLink>
				</Link>
			</li>
			<li>
				<Link href="#tech">
					<NavLink>Tecnologias</NavLink>
				</Link>
			</li>
			<li>
				<Link href="#exp">
					<NavLink>Experiêcias</NavLink>
				</Link>
			</li>
			<li>
				<Link href="#contact">
					<NavLink>Contato</NavLink>
				</Link>
			</li>
		</Div2>
		<Div3>
			<SocialIcons href="https://github.com/RaquelCAndrade">
				<AiFillGithub size="3rem" />
			</SocialIcons>
			<SocialIcons href="https://www.linkedin.com/in/raquel-carvalho-andrade/">
				<AiFillLinkedin size="3rem" />
			</SocialIcons>
			<SocialIcons href="https://api.whatsapp.com/send?phone=+5531986039844&text=Ol%C3%A1%2C%20venho%20por%20meio%20do%20seu%20portf%C3%B3lio%20na%20internet%2C%20gostaria%20de%20conhecer%20melhor%20seus%20servi%C3%A7os">
				<AiFillMessage size="3rem" />
			</SocialIcons>
		</Div3>
	</Container>
)

export default Header
