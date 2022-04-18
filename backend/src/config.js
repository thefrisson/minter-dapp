require('dotenv').config();
const basePath = process.cwd();
const fs = require("fs");
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "Blockchain OG";
const description = "Cannabis infused NFTs---Join our collaborative effort to create one of the first community based strains on the blockchain!";
const baseUri = "ipfs://NewUriToReplace"; // This will be replaced automatically

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  {
    growEditionSizeTo: 5,
    layersOrder: [
      { name: "Strain" },
      { name: "Background" },
      { name: "Gorilla Glue Special Yellow Type" },
      { name: "Gorilla Glue Special Yellow Potency" }
    ]
  }, {
    growEditionSizeTo: 20,
    layersOrder: [
      { name: "Strain" },
      { name: "Background" },
      { name: "Dosidos Type" },
      { name: "Dosidos Potency" }
    ]
  }, {
    growEditionSizeTo: 27,
    layersOrder: [
      { name: "Strain" },
      { name: "Background" },
      { name: "Mendocino Purps Type" },
      { name: "Mendocino Purps Potency" }
    ]
  }, {
    growEditionSizeTo: 40,
    layersOrder: [
      { name: "Strain" },
      { name: "Background" },
      { name: "Green Crack Type" },
      { name: "Green Crack Potency" }
    ]
  }, {
    growEditionSizeTo: 46,
    layersOrder: [
      { name: "Strain" },
      { name: "Background" },
      { name: "Wedding Cake Special 420 Type" },
      { name: "Wedding Cake Special 420 Potency" }
    ]
  }, {
    growEditionSizeTo: 60,
    layersOrder: [
      { name: "Strain" },
      { name: "Background" },
      { name: "Jack Herer Type" },
      { name: "Jack Herer Potency" }
    ]
  }, {
    growEditionSizeTo: 66,
    layersOrder: [
      { name: "Strain" },
      { name: "Background" },
      { name: "Gushers Type" },
      { name: "Gushers Potency" }
    ]
  }, {
    growEditionSizeTo: 80,
    layersOrder: [
      { name: "Strain" },
      { name: "Background" },
      { name: "Northern Lights Type" },
      { name: "Northern Lights Potency" }
    ]
  }, {
    growEditionSizeTo: 86,
    layersOrder: [
      { name: "Strain" },
      { name: "Background" },
      { name: "Biscotti Type" },
      { name: "Biscotti Potency" }
    ],
  }, {
    growEditionSizeTo: 100,
    layersOrder: [
      { name: "Strain" },
      { name: "Background" },
      { name: "Cherry Pie 2 Type" },
      { name: "Cherry Pie 2 Potency" }
    ]
  }, {
    growEditionSizeTo: 107,
    layersOrder: [
      { name: "Strain" },
      { name: "Background" },
      { name: "Gods Gift Type" },
      { name: "Gods Gift Potency" }
    ]
  }, {
    growEditionSizeTo: 120,
    layersOrder: [
      { name: "Strain" },
      { name: "Background" },
      { name: "Super Lemon Haze Type" },
      { name: "Super Lemon Haze Potency" }
    ]
  }, {
    growEditionSizeTo: 128,
    layersOrder: [
      { name: "Strain" },
      { name: "Background" },
      { name: "GG4 Type" },
      { name: "GG4 Potency" }
    ]
  }, {
    growEditionSizeTo: 150,
    layersOrder: [
      { name: "Strain" },
      { name: "Background" },
      { name: "Apple Fritter Type" },
      { name: "Apple Fritter Potency" }
    ],
  }, {
    growEditionSizeTo: 167,
    layersOrder: [
      { name: "Strain" },
      { name: "Background" },
      { name: "Blue Dream Type" },
      { name: "Blue Dream Potency" }
    ]
  }, {
    growEditionSizeTo: 180,
    layersOrder: [
      { name: "Strain" },
      { name: "Background" },
      { name: "Blue Dream 2 Type" },
      { name: "Blue Dream 2 Potency" }
    ]
  }, {
    growEditionSizeTo: 193,
    layersOrder: [
      { name: "Strain" },
      { name: "Background" },
      { name: "Blueberry Type" },
      { name: "Blueberry Potency" }
    ]
  }, {
    growEditionSizeTo: 206,
    layersOrder: [
      { name: "Strain" },
      { name: "Background" },
      { name: "Bubba Kush Type" },
      { name: "Bubba Kush Potency" }
    ]
  }, {
    growEditionSizeTo: 212,
    layersOrder: [
      { name: "Strain" },
      { name: "Background" },
      { name: "Bubble Gum Type" },
      { name: "Bubble Gum Potency" }
    ]
  }, {
    growEditionSizeTo: 230,
    layersOrder: [
      { name: "Strain" },
      { name: "Background" },
      { name: "Dutch Treat Type" },
      { name: "Dutch Treat Potency" }
    ]
  }, {
    growEditionSizeTo: 250,
    layersOrder: [
      { name: "Strain" },
      { name: "Background" },
      { name: "Cherry Pie Type" },
      { name: "Cherry Pie Potency" }
    ]
  }, {
    growEditionSizeTo: 270,
    layersOrder: [
      { name: "Strain" },
      { name: "Background" },
      { name: "Girl Scout Cookies Type" },
      { name: "Girl Scout Cookies Potency" }
    ]
  }, {
    growEditionSizeTo: 285,
    layersOrder: [
      { name: "Strain" },
      { name: "Background" },
      { name: "Gorilla Glue Type" },
      { name: "Gorilla Glue Potency" }
    ]
  }, {
    growEditionSizeTo: 300,
    layersOrder: [
      { name: "Strain" },
      { name: "Background" },
      { name: "Gorilla Glue 2 Type" },
      { name: "Gorilla Glue 2 Potency" }
    ]
  }, {
    growEditionSizeTo: 308,
    layersOrder: [
      { name: "Strain" },
      { name: "Background" },
      { name: "Alaskan Thunderfuck Type" },
      { name: "Alaskan Thunderfuck Potency" }
    ],
  }, {
    growEditionSizeTo: 320,
    layersOrder: [
      { name: "Strain" },
      { name: "Background" },
      { name: "Green Crack 2 Type" },
      { name: "Green Crack 2 Potency" }
    ]
  }, {
    growEditionSizeTo: 345,
    layersOrder: [
      { name: "Strain" },
      { name: "Background" },
      { name: "Miracle Alien Cookies Type" },
      { name: "Miracle Alien Cookies Potency" }
    ]
  }, {
    growEditionSizeTo: 350,
    layersOrder: [
      { name: "Strain" },
      { name: "Background" },
      { name: "Mendo Purps Type" },
      { name: "Mendo Purps Potency" }
    ]
  }, {
    growEditionSizeTo: 360,
    layersOrder: [
      { name: "Strain" },
      { name: "Background" },
      { name: "OG Kush Type" },
      { name: "OG Kush Potency" }
    ]
  }, {
    growEditionSizeTo: 370,
    layersOrder: [
      { name: "Strain" },
      { name: "Background" },
      { name: "OG Kush 2 Type" },
      { name: "OG Kush 2 Potency" }
    ]
  }, {
    growEditionSizeTo: 380,
    layersOrder: [
      { name: "Strain" },
      { name: "Background" },
      { name: "Purple Punch Type" },
      { name: "Purple Punch Potency" }
    ]
  }, {
    growEditionSizeTo: 390,
    layersOrder: [
      { name: "Strain" },
      { name: "Background" },
      { name: "Runtz Type" },
      { name: "Runtz Potency" }
    ]
  }, {
    growEditionSizeTo: 400,
    layersOrder: [
      { name: "Strain" },
      { name: "Background" },
      { name: "Skunk 1 Type" },
      { name: "Skunk 1 Potency"}
    ]
  }, {
    growEditionSizeTo: 410,
    layersOrder: [
      { name: "Strain" },
      { name: "Background" },
      { name: "SFV OG Type" },
      { name: "SFV OG Potency" }
    ]
  }, {
    growEditionSizeTo: 430,
    layersOrder: [
      { name: "Strain" },
      { name: "Background" },
      { name: "Sour Diesel Type" },
      { name: "Sour Diesel Potency" }
    ]
  }, {
    growEditionSizeTo: 450,
    layersOrder: [
      { name: "Strain" },
      { name: "Background" },
      { name: "Sour Diesel 2 Type" },
      { name: "Sour Diesel 2 Potency" }
    ]
  }, {
    growEditionSizeTo: 500,
    layersOrder: [
      { name: "Strain" },
      { name: "Background" },
      { name: "Silver Haze Type" },
      { name: "Silver Haze Potency" }
    ]
  }, {
    growEditionSizeTo: 550,
    layersOrder: [
      { name: "Strain" },
      { name: "Background" },
      { name: "Thin Mint GSC Type" },
      { name: "Thin Mint GSC Potency" }
    ]
  }, {
    growEditionSizeTo: 560,
    layersOrder: [
      { name: "Strain" },
      { name: "Background" },
      { name: "Wedding Cake Type" },
      { name: "Wedding Cake Potency" }
    ]
  }, {
    growEditionSizeTo: 562,
    layersOrder: [
      { name: "Strain" },
      { name: "Background" },
      { name: "Zkittlez Type" },
      { name: "Zkittlez Potency" }
    ]
  }, {
    growEditionSizeTo: 575,
    layersOrder: [
      { name: "Strain" },
      { name: "Background" },
      { name: "Chemdawg Type" },
      { name: "Chemdawg Potency" }
    ]
  },
];

const shuffleLayerConfigurations = true;

const debugLogs = false;

const format = {
  width: 2048,
  height: 2048,
  smoothing: false,
};

const extraMetadata = {
  external_url: "https://blockchainog.art", // Replace with your website or remove this line if you do not have one.
};

// NFTPort Info

// ** REQUIRED **
const AUTH = process.env.NFTPORT_API_KEY; // Set this in the .env file to prevent exposing your API key when pushing to Github
const LIMIT = 2; // Your API key rate limit
const CHAIN = 'rinkeby'; // only rinkeby or polygon

// REQUIRED CONTRACT DETAILS THAT CANNOT BE UPDATED LATER!
const CONTRACT_NAME = 'Blockchain OG';
const CONTRACT_SYMBOL = 'BOG';
const METADATA_UPDATABLE = true; // set to false if you don't want to allow metadata updates after minting
const OWNER_ADDRESS = '0xf5c8a5c5A6648f243f0c0A2704f0dc3C820B7180';
const TREASURY_ADDRESS = '0xf5c8a5c5A6648f243f0c0A2704f0dc3C820B7180';
const MAX_SUPPLY = 4200; //Matic: 420000000; // The maximum number of NFTs that can be minted. CANNOT BE UPDATED!
const MINT_PRICE = 0.001; //Matic: 42.0; // Minting price per NFT. Rinkeby = ETH, Polygon = MATIC. CANNOT BE UPDATED!
const TOKENS_PER_MINT = 10; // maximum number of NFTs a user can mint in a single transaction. CANNOT BE UPDATED!

// REQUIRED CONTRACT DETAILS THAT CAN BE UPDATED LATER.
const PUBLIC_MINT_START_DATE = "2022-04-20T16:20:42-05:00"; // This is required. Eg: 2022-02-08T11:30:48+00:00

// OPTIONAL CONTRACT DETAILS THAT CAN BE UPDATED LATER.
const PRESALE_MINT_START_DATE = null; // Optional. Eg: 2022-02-08T11:30:48+00:00
const ROYALTY_SHARE = 1000; // Percentage of the token price that goes to the royalty address. 100 bps = 1%
const ROYALTY_ADDRESS = "0xf5c8a5c5A6648f243f0c0A2704f0dc3C820B7180"; // Address that will receive the royalty
const BASE_URI = null; // only update if you want to manually set the base uri
const PREREVEAL_TOKEN_URI = "https://ipfs.io/ipfs/bafybeierjv7gggkpdaggi3a4vooqdy3mcsouuuwomerem7nn7565hbian4"; // only update if you want to manually set the prereveal token uri
const PRESALE_WHITELISTED_ADDRESSES = []; // only update if you want to manually set the whitelisted addresses

// ** OPTIONAL **
let CONTRACT_ADDRESS = "YOUR CONTRACT ADDRESS"; // If you want to manually include it

// Generic Metadata is optional if you want to reveal your NFTs
const GENERIC = true; // Set to true if you want to upload generic metas and reveal the real NFTs in the future
const GENERIC_TITLE = CONTRACT_NAME; // Replace with what you want the generic titles to say if you want it to be different from the contract name.
const GENERIC_DESCRIPTION = "What's Your Nugg?"; // Replace with what you want the generic descriptions to say.
const GENERIC_IMAGE = "https://ipfs.io/ipfs/bafybeierjv7gggkpdaggi3a4vooqdy3mcsouuuwomerem7nn7565hbian4"; // Replace with your generic image that will display for all NFTs pre-reveal.

// Automatically set contract address if deployed using the deployContract.js script
try {
  const rawContractData = fs.readFileSync(
    `${basePath}/build/contract/_contract.json`
  );
  const contractData = JSON.parse(rawContractData);
  if (contractData.response === "OK" && contractData.error === null) {
    CONTRACT_ADDRESS = contractData.contract_address;
  }
} catch (error) {
  // Do nothing, falling back to manual contract address
}
// END NFTPort Info

const solanaMetadata = {
  symbol: "YC",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://www.youtube.com/c/hashlipsnft",
  creators: [
    {
      address: "7fXNuer5sbZtaTEPhtJ5g5gNtuyRoKkvxdjEjEnPN4mC",
      share: 100,
    },
  ],
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
  AUTH,
  LIMIT,
  CONTRACT_ADDRESS,
  OWNER_ADDRESS,
  TREASURY_ADDRESS,
  CHAIN,
  GENERIC,
  GENERIC_TITLE,
  GENERIC_DESCRIPTION,
  GENERIC_IMAGE,
  CONTRACT_NAME,
  CONTRACT_SYMBOL,
  METADATA_UPDATABLE,
  ROYALTY_SHARE,
  ROYALTY_ADDRESS,
  MAX_SUPPLY,
  MINT_PRICE,
  TOKENS_PER_MINT,
  PRESALE_MINT_START_DATE,
  PUBLIC_MINT_START_DATE,
  BASE_URI,
  PREREVEAL_TOKEN_URI,
  PRESALE_WHITELISTED_ADDRESSES
};
