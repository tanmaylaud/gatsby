/** @jsx jsx */
import { jsx } from "theme-ui"
import { MdStar } from "react-icons/md"

import { Box, Flex } from "theme-ui"
import { Heading, Text } from "../system"
import ImagePlaceholder from "../image-placeholder"

const Card = () => (
  <Box
    sx={{
      width: `20rem`,
      mb: 8,
    }}
  >
    <ImagePlaceholder borderRadius={1} boxShadow="raised" mb={2} />
    <Flex>
      <Text
        color="grey.60"
        fontFamily="heading"
        fontSize={1}
        letterSpacing="tracked"
        textTransform="uppercase"
      >
        greglobinski/
      </Text>
      <Flex
        sx={{
          alignItems: `center`,
          color: `grey.60`,
          fontSize: 1,
          ml: `auto`,
        }}
      >
        <MdStar /> 167
      </Flex>
    </Flex>
    <Heading as="h3" fontSize={4} fontWeight="heading">
      gatsby-starter-personal-blog
    </Heading>
    <Text fontSize={1}>A Gatsby starter for a personal blog</Text>
    <Flex
      sx={{
        mt: 4,
      }}
    >
      <Text color="grey.50" fontSize={0}>
        Updated 3 days ago
      </Text>
      <Box />
    </Flex>
  </Box>
)

export default Card
