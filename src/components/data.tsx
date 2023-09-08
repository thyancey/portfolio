import Slots from './projects/slots';
import Zebra from './projects/zebra';
import Dropship from './projects/dropship';
import AlteredChromatic from './projects/alteredchromatic';
import FretRef from './projects/fretref';
import BrowserPet from './projects/browserpet';
import RaccoonTrapper from './projects/raccoontrapper';

export type GalleryDef = {
  image: string;
  caption?: string;
};

export type ContentDef = {
  route: string;
  name: string;
  description?: string;
  theme?: string;
  gallery: GalleryDef[];
  url?: string;
  repoUrl?: string;
  bodyComponent: React.ReactNode;
  titleComponent?: React.ReactNode;
};

export const Projects: ContentDef[] = [
  Zebra,
  Slots,
  BrowserPet,
  AlteredChromatic,
  FretRef,
  Dropship,
  RaccoonTrapper
];