import PropTypes from 'prop-types';
import { Box, Button, Flex } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';

import Link from '@/components/Link/Link';

const PageHeader = ({ backButtonHref, children }) => (
  <Flex w="full" justifyContent="center" alignContent="center" wrap="wrap">
    <Flex justify="center" alignSelf="center" flex={1}>
      <Link href={backButtonHref} noUnderline>
        <Button
          leftIcon={<ArrowBackIcon />}
          colorScheme="blackAlpha"
          variant="solid"
        >
          Back
        </Button>
      </Link>
    </Flex>
    {children}
    <Box flex={1} />
  </Flex>
);

PageHeader.propTypes = {
  backButtonHref: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default PageHeader;
