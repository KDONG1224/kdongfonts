export interface iconsProps {
  explorer: string;
  edge: string;
  firefox: string;
  safari: string;
  opera: string;
  chrome: string;
  whale: string;
}

export interface WebFontCrossProps {
  icons: iconsProps;
  TTF: string[];
  OTF: string[];
  WOFF: string[];
  WOFF2: string[];
  SVG: string[];
  EOT: string[];
}

export interface ResponseFont {
  id?: number | string;
  title?: string;
  koKR?: string;
  enUS?: string;
  desc?: string;
  fontTypes?: string;
  company?: string;
  style?: string;
  extension?: string;
  thumbnails?: string;
  downloadLink?: string;
  webType?: {
    fontFamily?: string;
    link?: string;
    import?: string;
  };
  license?: string[];
  copyRight?: string[];
  webfontCross?: WebFontCrossProps[];
}
export interface ResponseHomeFont {
  id: number | string;
  title: string;
  koKR: string;
  enUS: string;
  desc: string;
  fontTypes: string;
  company: string;
  style: string;
  extension: string;
  thumbnails: string;
  downloadLink?: string;
  webType: {
    fontFamily: string;
    link: string;
    import: string;
  };
}
