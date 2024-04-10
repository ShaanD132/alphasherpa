"use client"
import CandleGraph from "@/components/candle-graph";
import CompanyInfo from "@/components/company-info";
import NewsTable from "@/components/news-table";
import { Box, Container, Heading } from "@chakra-ui/react";
import Image from "next/image";

export default function Home() {
  return (
    <Container maxW="container.lg">
      <CompanyInfo />
      <Box mt={8}>
        <Heading id="graph">Stock Prices</Heading>
        <Box mt={6}>
          <CandleGraph/>
        </Box>
      </Box>

      <Box mt={8}>
        <Heading id="news">News</Heading>
        <Box mt={6} mb={10}>
          <NewsTable/>
        </Box>
      </Box>
    </Container>
  );
}
