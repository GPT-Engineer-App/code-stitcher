import { Container, Text, VStack, Heading, Button, useColorMode, IconButton } from "@chakra-ui/react";
import { FaSun, FaMoon, FaTools } from "react-icons/fa";

const Index = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">
          Stitchers: Code Sourcing
        </Heading>
        <Text fontSize="xl">Your hub for code modification, compatibility checks, and integration.</Text>
        <Button leftIcon={colorMode === "light" ? <FaMoon /> : <FaSun />} onClick={toggleColorMode} mt={4}>
          Toggle {colorMode === "light" ? "Dark" : "Light"} Mode
        </Button>
        <IconButton aria-label="Tools" icon={<FaTools />} size="lg" onClick={() => alert("Integration Tools Activated!")} />
      </VStack>
    </Container>
  );
};

export default Index;
