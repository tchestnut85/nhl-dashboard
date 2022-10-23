import NextLink from 'next/link';
import { Flex, Image, Link, Text } from '@chakra-ui/react';

import { MESSAGES } from '@constants';

const navConfig = [{ id: 'teams', label: 'All Teams', href: '/' }];

const Navbar = () => {
  return (
    <Flex
      w="100%"
      justify="space-between"
      alignItems="center"
      bg="lightgray"
      px={5}
      py={2}
      mb={5}
    >
      <Image w={100} src="/nhl-logo.png" alt="NHL logo" />
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
};

export default Navbar;
