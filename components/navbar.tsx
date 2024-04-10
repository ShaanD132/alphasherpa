import { Box, Container, Link } from "@chakra-ui/react";


export default function Navbar() {
  return(
    <Container maxW="container.lg">
      <Box display="flex" gap = {6} mt= {5} fontSize={18} fontWeight={"normal"}>
        <Link href="#home">Home</Link>
        <Link href ="#graph">Stock Prices</Link>
        <Link href ="#news">News</Link>
      </Box>
    </Container>
  )
}