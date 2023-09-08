import Slots from '../components/projects/slots';
import Zebra from '../components/projects/zebra';
import Dropship from '../components/projects/dropship';
import AlteredChromatic from '../components/projects/alteredchromatic';
import FretRef from '../components/projects/fretref';
import BrowserPet from '../components/projects/browserpet';
import RaccoonTrapper from '../components/projects/raccoontrapper';

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