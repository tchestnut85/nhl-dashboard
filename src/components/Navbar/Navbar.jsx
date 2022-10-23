import NextLink from 'next/link';
import { Flex, Link, Text } from '@chakra-ui/react';

import ImageLogo from '@components/ImageLogo/ImageLogo';

import { MESSAGES } from '@constants';

const navConfig = [{ id: 'teams', label: 'All Teams', href: '/' }];

const Navbar = () => (
  <Flex
    w="100%"
    justify="space-between"
    alignItems="center"
    bg="lightgray"
    px={5}
    py={2}
    mb={5}
  >
    <ImageLogo
      w={100}
      name={MESSAGES.navHeading.split(' ')[0]}
      src="/nhl-logo.png"
    />
    <Text as="h1" fontSize="5xl">
      {MESSAGES.navHeading}
    </Text>
    {navConfig.map(({ id, label, href }) => (
      <NextLink key={id} href={href} passHref>
        <Link fontSize="2xl">{label}</Link>
      </NextLink>
    ))}
  </Flex>
);

export default Navbar;
