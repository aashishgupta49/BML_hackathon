import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, MainHeading } from '../../globalStyles';
import { HeroVideo, HeroSection, HeroText, ButtonWrapper, HeroButton } from './HeroStyles';

const Hero = () => {
	return (
		<HeroSection>
			<HeroVideo src="./assets/hero_bg.mov" autoPlay muted />
			<Container>
				<MainHeading><h1 class="cursive" > <em id="font1" style={{color: '#3784f8'}}>C</em>od<em style={{color: '#3784f8'}} id="font2">L</em>er</h1></MainHeading>
				<HeroText>
				 A platform where you can connect with your college mates and collaborate with them .
				 <br />
				 <br />
				 <h3>create &#x2022; connect &#x2022; collaborate </h3> 
				 
				</HeroText>
				<ButtonWrapper>
					<Link to="signup">
						<Button>Get Started</Button>
					</Link>
					<HeroButton>Connect</HeroButton>
				</ButtonWrapper>
			</Container>
		</HeroSection>
	);
};

export default Hero;
