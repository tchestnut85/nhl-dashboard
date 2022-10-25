import NextLink from 'next/link';
import PropTypes from 'prop-types';
import { Link as ChakraLink, LinkBox, LinkOverlay } from '@chakra-ui/react';

const Link = ({
  href,
  children,
  isOverlay = false,
  passHref = true,
  noUnderline = false,
  ...props
}) => {
  const Component = isOverlay ? LinkOverlay : ChakraLink;

  const LinkComponent = () => (
    <NextLink href={href} passHref={passHref}>
      <Component
        {...props}
        textDecoration={noUnderline ? 'none !important' : ''}
      >
        {children}
      </Component>
    </NextLink>
  );

  return (
    <>
      {isOverlay ? (
        <LinkBox {...props}>
          <LinkComponent />
        </LinkBox>
      ) : (
        <LinkComponent />
      )}
    </>
  );
};

Link.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  isOverlay: PropTypes.bool,
  passHref: PropTypes.bool,
  className: PropTypes.string,
};

export default Link;
