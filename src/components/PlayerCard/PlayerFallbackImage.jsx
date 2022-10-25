import PropTypes from 'prop-types';

import ImageComp from '@/components/ImageComp/ImageComp';

import { AVATAR_SIZE, PLAYER_IMAGE_URLS } from '@/constants';

const PlayerFallbackImage = ({
  fallbackSrc = PLAYER_IMAGE_URLS.fallback,
  size = AVATAR_SIZE.default,
}) => <ImageComp name="player avatar" src={fallbackSrc} isPlayer size={size} />;

PlayerFallbackImage.propTypes = {
  fallbackSrc: PropTypes.string,
  size: PropTypes.string,
};

export default PlayerFallbackImage;
