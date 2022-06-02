import React from "react";
import { Project } from "./Projects";
import { Box, Text, Tag, HStack } from "@chakra-ui/react";
import { FaCaretRight } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
interface Props extends Project {
  index: number;
}

const ProjectItem = ({
  company_name,
  description,
  duration,
  thumbnail,
  project_url,
  technologies,
  title,
  index,
}: Props) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      p="4"
    >
      <Link href={project_url} passHref>
        <Text
          target="_blank"
          as="a"
          mb="2"
          position="relative"
          height={256}
          w="100%"
          className="roundedImage"
          overflow="hidden"
        >
          <Image
            loading="lazy"
            title={`${title} Thumbnail`}
            alt={`${title} Thumbnail`}
            src={thumbnail}
            layout="fill"
            objectFit="fill"
          />
        </Text>
      </Link>
      <Text as="h3" textColor="gray.200" fontSize="2xl">
        <Link href={project_url} passHref>
          <a target="_blank">{title}</a>
        </Link>
      </Text>
      <Box display="flex" flexDir="row" alignItems="center">
        <Text color="neonBlue">@{company_name}</Text>
        <Text fontSize="sm" pl="4" fontFamily="SF Mono Light" color="gray.400">
          {duration}
        </Text>
      </Box>
      <HStack display="flex" flexDir="row" my="2">
        {technologies.map((tech) => (
          <Tag size="sm" variant="outline" color="neonBlue" key={tech}>
            {tech}
          </Tag>
        ))}
      </HStack>
      <Text color="gray.400" as="p">
        {description.heading}
      </Text>
      {description.bullets && (
        <Box as="ul">
          {description.bullets.map((bullet, index) => (
            <Box
              py="1"
              as="li"
              color="gray.400"
              key={`${title}-${index}`}
              display="flex"
            >
              <Text color="neonBlue" pr="1" pt="1">
                <FaCaretRight size="0.75rem" />
              </Text>
              {bullet}
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default React.memo(ProjectItem);
