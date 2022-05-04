const customizationJson: ThemeProps = {
  // collection: 'original=352215253242,gravediggers=355154214155' ,
  collection: '352215253242' ,
  owner: 'harrybird',
  typography: {
    h1: {
      font: 'Bebas Neue',
      size: '64px',
      fontWeight: '400',
      isItalic: false,
    },
    h2: {
      font: 'Bebas Neue',
      size: '32px',
      fontWeight: '400',
      isItalic: false,
    },
    h3: {
      font: 'Bebas Neue',
      size: '24px',
      fontWeight: '400',
      isItalic: true,
    },
    h4: {
      font: 'Roboto',
      size: '18px',
      fontWeight: '400',
      isItalic: false,
    },
    paragraph: {
      font: 'Roboto',
      size: '12px',
      fontWeight: '400',
      isItalic: false,
    },
    label: {
      font: 'Roboto',
      size: '14px',
      fontWeight: '600',
      isItalic: false,
    },
    caption: {
      font: 'Roboto',
      size: '14px',
      fontWeight: '400',
      isItalic: false,
    },
  },
  navbar: {
    logo: 'https://deadboysinc.com/wp-content/uploads/DB_White-2.png',
    logoLink: 'https://deadboysinc.com',
    backgroundColor: '#000000',
    defaultAvatarImage: '/default-avatar.png',
    navLinkFontType: 'label',
    navLinks: [
      // recommended 3 - 5
      {
        link: 'http://shop.deadboysinc.com/',
        color: '#ffffff',
      },
      {
        link: 'https://deadboysinc.com/merch/',
        color: '#ffffff',
      },
      {
        link: 'https://deadboysinc.com/blog/',
        color: '#ffffff',
      },
      {
        link: 'https://deadboysinc.com/team/',
        color: '#ffffff',
      },
      {
        link: 'https://deadboysinc.com/community/',
        color: '#ffffff',
      },
      {
        link: 'https://deadboysinc.com/members-area/',
        color: '#ffffff',
      },
      {
        link: '/my-items', // always recommended to keep
        color: '#ffffff',
      },
    ],
    balanceSubtitleFontType: 'label',
    buttonFontColor: '#ffffff',
    buttonBackgroundColor: 'transparent',
    buttonBorderColor: '#ffffff',
    buttonFontType: 'label',
    bottomBorderColor: '#cccccc',
  },
  footer: {
    logo: '/logo.png',
    socialMediaLinks: [
      {
        link: 'https://www.facebook.com/deadboysinc',
        type: 'facebook',
        color: '#1877F2',
      },
      {
        link: 'https://twitter.com/DeadboysNFTs',
        type: 'twitter',
        color: '#1DA1F2',
      },
      {
        link: 'https://www.instagram.com/thedeadboysinc/',
        type: 'instagram',
        color: '#FF0000',
      },
    ],
    backgroundColor: 'black',
    borderColor: 'transparent',
  },
  nftCard: {
    mainBackgroundColor: '#ffffff',
    secondaryBackgroundColor: 'transprent',
    borderColor: 'lightgrey',
    borderRadius: '8px',
    priceFont: {
      type: 'h4',
      color: 'red',
    },
    countFont: {
      type: 'label',
      color: '#ffffff',
    },
    titleFont: {
      type: 'h4',
      color: '#000000',
      carouselHeight: '32px',
    },
    collectionNameFont: {
      type: 'label',
      color: '#666666',
    },
  },
  featuredSection: {
    carousel: false,
    titleFont: {
      type: 'h2',
      color: '#ffffff',
    },
    backgroundColor: '#000000',
    carouselButtonsBackgroundColor: '#ffffff',
    carouselButtonsBorderColor: 'lightgrey',
  },
  header: {
    image: '/header-image.png',
    imagePlacement: 'right',
    backgroundColor: 'black',
    highlightFont: {
      isShown: true,
      type: 'paragraph',
      color: '#377EFF',
    },
    mainHeadingFont: {
      type: 'h1',
      color: '#ffffff',
    },
    subheadingFont: {
      type: 'h4',
      color: 'grey',
    },
    button: {
      isShown: true,
      textColor: 'white',
      textFont: 'caption',
      backgroundColor: 'red',
      link: 'https://originals.deadboysinc.com/',
    },
  },
  myItemsPage: {
    backgroundColor: '#ffffff',
    headerFont: {
      type: 'h2',
      color: 'white',
    },
  },
  detailPage: {
    imagePlacement: 'left',
    imageBackgroundColor: 'transparent',
    imageShadow: false,
    cardTitleFont: {
      type: 'h1',
      color: 'white',
    },
    collectionNameFont: {
      type: 'caption',
      color: '#666666',
    },
    priceEditionLabelFont: {
      type: 'caption',
      color: '#666666',
    },
    priceFont: {
      type: 'h2',
      color: '#c71f3e',
    },
    editionFont: {
      type: 'h2',
      color: 'white',
    },
    cardDescriptionFont: {
      type: 'caption',
      color: '#666666',
    },
    errorFont: {
      type: 'caption',
      color: '#c71f3e',
    },
    button: {
      textColor: 'black',
      textFont: 'caption',
      backgroundColor: 'white',
    },
    dropdown: {
      borderColor: '#f2f2f2',
      arrowDropdownColor: '#666',
      textColor: 'white',
      textFont: 'caption',
    },
  },
};

export const generateFontImportLink = (
  typographyVariants: TypographyVariant[]
): string => {
  const stylesByFont = {};
  typographyVariants.forEach(({ font, fontWeight, isItalic }) => {
    if (!stylesByFont[font] || !stylesByFont[font][fontWeight]) {
      stylesByFont[font] = {
        [fontWeight]: {
          shouldLoadItalic: isItalic,
        },
      };
    }

    if (isItalic) {
      stylesByFont[font][fontWeight] = {
        shouldLoadItalic: true,
      };
    }
  });

  const fonts = Object.keys(stylesByFont).map((font) => {
    const styles = stylesByFont[font];
    let shouldLoadItalic = false;

    const partialStyleStrings = Object.keys(styles).map((weight) => {
      const iItalic = styles[weight].shouldLoadItalic;
      if (iItalic) {
        shouldLoadItalic = true;
      }
      return iItalic ? `${weight};1,${weight}` : `${weight}`;
    });

    const stylesString = shouldLoadItalic
      ? partialStyleStrings.map((string) => `0,${string}`).join(';')
      : partialStyleStrings.join(';');

    return `family=${font.replace(/\s/g, '+')}:${
      shouldLoadItalic ? 'ital,' : ''
    }wght@${stylesString}`;
  });

  return `https://fonts.googleapis.com/css2?${fonts.join('&')}&display=swap`;
};

export interface HeaderProps {
  image: string;
  imagePlacement: string;
  backgroundColor: string;
  highlightFont: {
    isShown: boolean;
    type: string;
    color: string;
  };
  mainHeadingFont: {
    type: string;
    color: string;
  };
  subheadingFont: {
    type: string;
    color: string;
  };
  button: {
    isShown: boolean;
    textColor: string;
    textFont: string;
    backgroundColor: string;
    link: string;
  };
}

export interface NavbarProps {
  logo: string;
  logoLink: string;
  backgroundColor: string;
  defaultAvatarImage: string;
  navLinkFontType: string;
  navLinks: {
    link: string;
    color: string;
  }[];
  balanceSubtitleFontType: string;
  buttonFontColor: string;
  buttonBackgroundColor: string;
  buttonBorderColor: string;
  buttonFontType: string;
  bottomBorderColor: string;
}

export interface FeaturedSectionProps {
  carousel: boolean;
  titleFont: {
    type: string;
    color: string;
  };
  backgroundColor: string;
  carouselButtonsBackgroundColor: string;
  carouselButtonsBorderColor: string;
}

export interface FooterProps {
  logo: string;
  socialMediaLinks: {
    link: string;
    type: string;
    color: string;
  }[];
  backgroundColor: string;
  borderColor: string;
}

export interface MyItemsPageProps {
  backgroundColor: string;
  headerFont: {
    type: string;
    color: string;
  };
}

export interface NftCardProps {
  mainBackgroundColor: string;
  secondaryBackgroundColor: string;
  borderColor: string;
  borderRadius: string;
  priceFont: {
    type: string;
    color: string;
  };
  countFont: {
    type: string;
    color: string;
  };
  titleFont: {
    type: string;
    color: string;
    carouselHeight: string;
  };
  collectionNameFont: {
    type: string;
    color: string;
  };
}

export interface DetailPageProps {
  imagePlacement: string;
  imageBackgroundColor: string;
  imageShadow: boolean;
  cardTitleFont: {
    type: string;
    color: string;
  };
  collectionNameFont: {
    type: string;
    color: string;
  };
  priceEditionLabelFont: {
    type: string;
    color: string;
  };
  priceFont: {
    type: string;
    color: string;
  };
  editionFont: {
    type: string;
    color: string;
  };
  cardDescriptionFont: {
    type: string;
    color: string;
  };
  errorFont: {
    type: string;
    color: string;
  };
  button: {
    textColor: string;
    textFont: string;
    backgroundColor: string;
  };
  dropdown: {
    borderColor: string;
    arrowDropdownColor: string;
    textColor: string;
    textFont: string;
  };
}

export interface TypographyVariant {
  font: string;
  size: string;
  fontWeight: string;
  isItalic: boolean;
}

export interface Typography {
  h1: TypographyVariant;
  h2: TypographyVariant;
  h3: TypographyVariant;
  h4: TypographyVariant;
  paragraph: TypographyVariant;
  label: TypographyVariant;
  caption: TypographyVariant;
}

export interface FontProps {
  type: string;
  color: string;
  typography: Typography;
}

export type ThemeProps = {
  collection: string;
  owner: string;
  typography: Typography;
  navbar: NavbarProps;
  footer: FooterProps;
  nftCard: NftCardProps;
  featuredSection: FeaturedSectionProps;
  header: HeaderProps;
  myItemsPage: MyItemsPageProps;
  detailPage: DetailPageProps;
};

export default customizationJson;
