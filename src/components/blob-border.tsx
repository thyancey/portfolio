import styled, { css } from 'styled-components';
import AssetMap from '../assets';

// SHOULD MATCH IMAGE SIZE, CAN BE LARGER/SMALLER BUT KEEP RATIO THE SAME
const BLOB_WIDTH = '695px';
const BLOB_HEIGHT = '65px';
const BLOB_SPEED = 30; // time in seconds to complete a blob loop, lower is faster
const BLOB_REPEAT = 5; // how many repeated segments, avoids seeing the edge when on wide monitors.

type ScBlobBorderProps = {
  $blobType: 'header' | 'footer';
};
export const ScBlobBorder = styled.div<ScBlobBorderProps>`
  position: absolute;
  left: 0;
  width: calc(${BLOB_WIDTH} * ${BLOB_REPEAT});
  height: ${BLOB_HEIGHT};
  z-index: 1;

  background-size: contain;

  @keyframes blob-wrap-left {
    0% {
      left: 0px;
    }
    100% {
      left: -${BLOB_WIDTH};
    }
  }

  @keyframes blob-wrap-right {
    0% {
      left: -${BLOB_WIDTH};
    }
    100% {
      left: 0px;
    }
  }

  background-image: url(${AssetMap.BlobDivider});
  animation: blob-wrap-left ${BLOB_SPEED / 2}s linear infinite;

  .theme-blog && {
    filter: drop-shadow(0px -4px 2px var(--theme-blog-secondary));
  }

  ${(p) =>
    p.$blobType === 'header' &&
    css`
      top: calc(100%);

      -webkit-transform: scaleY(-1);
      -moz-transform: scaleY(-1);
      -ms-transform: scaleY(-1);
      -o-transform: scaleY(-1);
      transform: scaleY(-1);

      animation: blob-wrap-left ${BLOB_SPEED}s linear infinite;
    `}

  ${(p) =>
    p.$blobType === 'footer' &&
    css`
      bottom: calc(100% - 1rem);
    `}
`;
