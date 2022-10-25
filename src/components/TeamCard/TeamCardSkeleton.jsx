import { Flex, SkeletonCircle, SkeletonText } from '@chakra-ui/react';

const TeamCardSkeleton = () => (
  <Flex my={5} justify="space-between" alignItems="center" w="100%">
    <SkeletonCircle size={100} />
    <Flex direction="column" gap="25px">
      <SkeletonText spacing="10" noOfLines={1} w="325px" />
      <SkeletonText spacing="10" noOfLines={1} w="325px" />
    </Flex>
  </Flex>
);

export default TeamCardSkeleton;
