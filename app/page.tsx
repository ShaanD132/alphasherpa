"use client"
import CandleGraph from "@/components/candle-graph";
import NewsTable from "@/components/news-table";
import { Box, Container, Heading } from "@chakra-ui/react";
import Image from "next/image";

export default function Home() {
  return (
    <Container maxW="container.lg">
      <Box mt={8}>
        <Heading>Market Data</Heading>
        <Box mt={6}>
          <CandleGraph/>
        </Box>
      </Box>

      <Box mt={8}>
        <Heading>News</Heading>
        <Box mt={6}>
          <NewsTable/>
        </Box>
      </Box>
    </Container>
  );
}
