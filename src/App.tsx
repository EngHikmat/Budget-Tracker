import { Box, Code, Heading, Text } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Box>
        <Heading as="h1" size="2xl" bg="brand.500">
          Welcome to Chakra UI v2
        </Heading>
        <Text fontSize="xl">
          Start editing the <Code>src/App.tsx</Code> file to get started.
        </Text>
      </Box>
    </>
  );
}

export default App;
