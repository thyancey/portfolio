import Loader from './blobloader.gif';
import BlobDivider from './blackblob1.png';
import noise_01 from './noise-01.png';

const AssetMap = {
  BlobDivider,
  Loader,
  noise_01
}

export function getUrl(name: string) {
  return new URL(`./content/${name}`, import.meta.url).href;
}

export default AssetMap;