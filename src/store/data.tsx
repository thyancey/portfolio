import Slots from '../components/projects/slots';
import Zebra from '../components/projects/zebratables';
import InfectedSteel from '../components/projects/infectedsteel';
import AlteredChromatic from '../components/projects/alteredchromatic';
import FretRef from '../components/projects/fretref';
import BrowserBuddy from '../components/projects/browserbuddy';
import RaccoonTrapper from '../components/projects/raccoontrapper';
import Hive from '../components/projects/hive';
import BeachChummers from '../components/projects/beachchummers';

export type GalleryDef = {
  image: string;
  thumbnail?: string;
  caption?: string;
  title?: string;
};

export type ProjectDef = {
  route: string;
  name: string;
  theme?: string;
  gallery: GalleryDef[];
  url?: string;
  urlTitle?: string;
  repoUrl?: string;
  bodyComponent?: React.ReactNode;
  titleComponent: React.ReactNode;
};

// WIDER IMAGES WORK BETTER WITH THE STUPID MODAL
export const Projects: ProjectDef[] = [
  BeachChummers,
  Zebra,
  FretRef,
  Hive,
  InfectedSteel,
  AlteredChromatic,
  Slots,
  BrowserBuddy,
  RaccoonTrapper,
];
