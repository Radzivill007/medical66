import makeFAIcon from "utils/makeFAIcon";

import {
    faMap,
    faEnvelope,
    faPlus,
    faBars,
    faTimes,
    faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import {
    faTwitter,
    faFacebookF,
    faLinkedinIn,
    faGithubAlt,
    faMediumM,
    faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

export const MapIcon = makeFAIcon(faMap);
export const EnvelopIcon = makeFAIcon(faEnvelope);
export const PlusIcon = makeFAIcon(faPlus);
export const BarsIcon = makeFAIcon(faBars);
export const GithubIcon = makeFAIcon(faGithubAlt);
export const MediumIcon = makeFAIcon(faMediumM);
export const WhatsappIcon = makeFAIcon(faWhatsapp);
export const CloseIcon = makeFAIcon(faTimes);
export const LanguageIcon = makeFAIcon(faGlobe);

export const TwitterIcon = makeFAIcon(faTwitter);
export const FacebookIcon = makeFAIcon(faFacebookF);
export const LinkedinIcon = makeFAIcon(faLinkedinIn);

export * from "config/CustomIcons";
