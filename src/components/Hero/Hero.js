import React from "react"

import {
	Section,
	SectionText,
	SectionTitle,
} from "../../styles/GlobalComponents"
import Button from "../../styles/GlobalComponents/Button"
import { LeftSection } from "./HeroStyles"

const Hero = (props) => (
	<Section row nopadding>
		<LeftSection>
			<SectionTitle main center>
				Raquel Carvalho <br />
				Desenvolvedora Web
			</SectionTitle>
			<SectionText>
				Apaixonada pelo universo da programação que, assim como eu, está
				em constante evolução! Meu propósito é sempre elevar minhas
				habilidades e meu trabalho ao próximo nível.
			</SectionText>
			<Button
				onClick={() =>
					window.open(
						"https://drive.google.com/file/d/1xWxEFx0pjJFOekmUjFVPOrUaKdafYmh_/view"
					)
				}
			>
				Download CV
			</Button>
		</LeftSection>
	</Section>
)

export default Hero
