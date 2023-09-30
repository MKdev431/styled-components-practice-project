import { StyledHeader, Nav, Logo, Image } from "./styles/Header.styled";
import { Container } from "./styles/Container.styled";
import { Flex } from "./styles/Flex.styled";
import { Button } from "./styles/Button.styled";

export default function Header() {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src="./images/logo.svg"></Logo>
          <Button>Try It Free</Button>
        </Nav>
        <Flex>
          <div>
            <h1>Lorem ipsum dolor, sit amet consectetur adipisicing.</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil dolorem omnis consequatur, voluptates ratione ipsa voluptatibus cumque reiciendis in aperiam earum quibusdam minima itaque, iste, sequi sit tempora repellat aliquam.</p>
            <Button
              $bg="#ff0099"
              color="#fff"
            >
              Get Started For Free
            </Button>
          </div>
          <Image src="./images/illustration-mockups.svg" />
        </Flex>
      </Container>
    </StyledHeader>
  );
}
