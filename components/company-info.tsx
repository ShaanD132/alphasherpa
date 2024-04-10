import { Badge, Box, Card, CardBody, CardHeader, Container, Heading, Image, Text } from "@chakra-ui/react";



export default function CompanyInfo() {
  var data = require("@/data/company_info.json")["data"]
  var badges: string[] = [data["gics1"]]
  for (let i = 1; i < 4; i++) {
    var gics = "gics" + (i+1)
    var unique = true

    for (let j = 0; j < badges.length; j++) {
      if (data[gics] == badges[j]) {
        unique = false
      }
    }

    if (unique) {
      badges.push(data[gics])
    }
  }

  const colors = ["blue", "green", "yellow", "orange"]

  return(
    <Container id="company" mt={5}>
      <Box>
        <Card bg="#2f3747">
          <Box display={"flex"} gap={10} justifyContent={"center"} justifyItems={"center"} mt={5}>

          <Box>
            <Box alignContent={"center"} h="100%">
              <Heading size="lg">Company: {data["company_name"]}</Heading>
            </Box>

          </Box>
          <Image src="images/logo.png" alt="abc logo" width={"auto"} height={50} />
          </Box>

          <CardBody fontSize="lg">
            <Box display="flex" gap={3}>
              {badges.map((badge, index) =>
              <Badge key={index} colorScheme={colors[index]}>{badge}</Badge>
              )}
            </Box>

            <Box mt={5}>
              <Text mt={1}><b>Bloomberg Ticker:</b> {data["BBY"]}</Text>
              <Text mt={1}> <b>RIC:</b> {data["RIC"]}</Text>
              <Text mt={1}> <b>Currency:</b> {data["currency"]}</Text>
              <Text mt={1}> <b>Market Cap:</b> {data["market_cap_usd"]} USD</Text>

            </Box>
          </CardBody>

        </Card>
      </Box>
    </Container>
  )
}