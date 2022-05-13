const localizationJson: LocalizationText = {
  en: {
    header: {
      highlightText: 'E X C L U S I V E',
      headerLine1: 'DEAD BOYS INC',
      headerLine2: 'ORIGINAL COLLECTION',
      description:
        'Check out our other DEADBOY collections ...',
      buttonText: 'VIEW GRAVEDIGGERS COLLECTION',
    },
    navbar: {
      navLinks: ['Buy a DeadBoy', 'Merch', 'Blog', 'Team', 'Members', 'My Items'],
      balanceText: 'Balance',
      loginText: 'Connect Wallet',
    },
    detailPage: {
      priceLabelText: 'PRICE',
      editionLabelText: 'EDITION SIZE',
      placeholderPriceText: 'AVAILABLE ON PROTON MARKET',
      placeholderDropdownText: 'NO ASSETS',
      buyButtonText: 'BUY NOW',
      viewButtonText: 'VIEW ON PROTON MARKET',
      sellButtonText: 'SELL ON PROTON MARKET',
      cancelSaleButtonText: 'CANCEL SALE ON PROTON MARKET',
    },
    nftCard: {
      nftsLeft: 'LEFT',
      nftsOwnedForSale: 'FOR SALE',
      soldOut: 'MORE INFO',
    },
    featuredSection: {
      heading: 'Original Collection', // optional
    },
    myItemsPage: {
      header: 'MY ITEMS',
    },
  },
};

export interface HeaderTextProps {
  highlightText: string;
  headerLine1: string;
  headerLine2: string;
  description: string;
  buttonText: string;
}

export interface NftCardTextProps {
  nftsLeft: string;
  nftsOwnedForSale: string;
  soldOut: string;
}

export interface NavbarTextProps {
  navLinks: string[];
  balanceText: string;
  loginText: string;
}

export interface FeaturedSectionTextProps {
  heading: string;
}

export interface DetailPageTextProps {
  priceLabelText: string;
  editionLabelText: string;
  placeholderPriceText: string;
  placeholderDropdownText: string;
  buyButtonText: string;
  viewButtonText: string;
  sellButtonText: string;
  cancelSaleButtonText: string;
}

export interface Text {
  header: HeaderTextProps;
  navbar: NavbarTextProps;
  detailPage: DetailPageTextProps;
  nftCard: NftCardTextProps;
  featuredSection: FeaturedSectionTextProps;
  myItemsPage: {
    header: string;
  };
}

interface LocalizationText {
  [language: string]: Text;
}

export default localizationJson;
