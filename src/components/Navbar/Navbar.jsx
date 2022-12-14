import { Flex, Button } from '@chakra-ui/react';

import ImageComp from '@/components/ImageComp/ImageComp';
import Link from '@/components/Link/Link';
import Heading from '@/components/Heading/Heading';

import { MESSAGES, NHL_LOGO } from '@/constants';

const Navbar = () => {
  const navConfig = [
    {
      id: 'teams',
      label: 'All Teams',
      href: '/',
    },
  ];

  return (
    <Flex
      w="100%"
      justify="space-between"
      alignItems="center"
      wrap="wrap"
      bg="lightgray"
      px={5}
      py={2}
      mb={5}
      as="header"
      fontFamily="Red Hat Display"
      fontWeight="bold"
    >
      <ImageComp
        w={100}
        name={MESSAGES.navHeading.split(' ')[0]}
        src={NHL_LOGO.path}
      />
      <Heading as="h1" fontSize="5xl" message={MESSAGES.navHeading} />
      <Flex as="nav">
        {navConfig.map(({ id, label, href, handler }) => (
          <Link key={id} href={href} fontSize="2xl" noUnderline>
            <Button colorScheme="blackAlpha" variant="solid">
              {label}
            </Button>
          </Link>
        ))}
      </Flex>
    </Flex>
  );
};

export default Navbar;
