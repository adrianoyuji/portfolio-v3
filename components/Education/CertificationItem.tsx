import { Box, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { BsDot } from "react-icons/bs";
import { Certificate } from "./Certifications";
import { BiLinkExternal } from "react-icons/bi";
const CertificationItem = ({
  institution_name,
  institution_url,
  period,
  title,
  certificate_link,
}: Certificate) => {
  return (
    <Box display="flex" flexDir="column" my="1">
      <Box display="flex" flexDir="row">
        <Text color="neonBlue" pr="1" pt="1">
          <BsDot size="1.25rem" />
        </Text>
        <Text as="h3" fontSize="xl" color="gray.200">
          {title}
        </Text>
        <Text as="h4">
          <Link href={institution_url} passHref>
            <Text fontSize="xl" pl="2" color="neonBlue" as="a" target="_blank">
              @ {institution_name}
            </Text>
          </Link>
        </Text>
      </Box>
      <Text
        color="gray.400"
        as="p"
        ml="5"
        display="inline-flex"
        flexDir="row"
        alignItems="center"
      >
        {period}
        {certificate_link && (
          <Link href={certificate_link} passHref>
            <Text as="a" target="_blank">
              <BiLinkExternal style={{ marginLeft: "4px" }} />
            </Text>
          </Link>
        )}
      </Text>
    </Box>
  );
};

export default CertificationItem;
