import Slots from '../components/projects/slots';
import Zebra from '../components/projects/zebra';
import Dropship from '../components/projects/dropship';
import AlteredChromatic from '../components/projects/alteredchromatic';
import FretRef from '../components/projects/fretref';
import BrowserBuddy from '../components/projects/browserbuddy';
import RaccoonTrapper from '../components/projects/raccoontrapper';

export type GalleryDef = {
  image: string;
  thumbnail?: string;
  caption?: string;
  title?: string;
};

export type ProjectDef = {
  route: string;
  name: string;
  description?: string;
  theme?: string;
  gallery: GalleryDef[];
  url?: string;
  repoUrl?: string;
  bodyComponent?: React.ReactNode;
  titleComponent: React.ReactNode;
};

// WIDER IMAGES WORK BETTER WITH THE STUPID MODAL
export const Projects: ProjectDef[] = [
  Slots,
  Zebra,
  BrowserBuddy,
  Dropship,
  AlteredChromatic,
  RaccoonTrapper,
  FretRef
];