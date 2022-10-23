import NextLink from 'next/link';
import { Flex, Image, Spacer, Link } from '@chakra-ui/react';

const navConfig = [{ id: 'teams', label: 'All Teams', href: '/' }];

const Navbar = () => {
  return (
    <Flex w="100%" justify="left" bg="lightgray" px={5} py={2}>
      <Image w={100} src="/nhl-logo.png" alt="NHL logo" />
      <Spacer />
      {navConfig.map(({ id, label, href }) => (
        <NextLink key={id} href={href} passHref>
          <Link alignSelf="center">{label}</Link>
        </NextLink>
      ))}
    </Flex>
  );
};

export default Navbar;
