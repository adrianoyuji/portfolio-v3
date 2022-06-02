import React from "react";
import { SocialMedia } from "./SocialMedia";
import Link from "next/link";
import { Text } from "@chakra-ui/react";
const SocialMediaItem = ({ action, Icon, title }: SocialMedia) => {
  return (
    <Link href={action} passHref>
      <Text
        as="a"
        target="_blank"
        color="neonBlue"
        pr="4"
        _hover={{ opacity: "0.6", transition: "opacity 250ms ease-in-out" }}
      >
        <Icon size="1.5rem" title={title} />
      </Text>
    </Link>
  );
};

export default SocialMediaItem;
