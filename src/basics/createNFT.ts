import fs from "fs";
import { TernoaIPFS, File } from "ternoa-js";

const main = async () => {
  const file = new File(
    [await fs.promises.readFile("IMG_6956.jpg")],
    "IMG_6956.jpg",
    {
      type: "jpg",
    }
  );

  const ipfsClient = new TernoaIPFS(new URL("https://ipfs-dev.trnnfr.com"), "b1d4c56d.1fce03afcb5b4ae3c262de0555a4bde3");

  const nftMetadata = {
    title: "Basic NFT",
    description: "Creating my first NFT",
  };

  const { Hash } = await ipfsClient.storeNFT(file, nftMetadata);
  console.log("The off-chain metadata CID hash is ", Hash);
};		

main();