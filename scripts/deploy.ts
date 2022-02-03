import { deployContracts } from "../utils/deploy";

(async () => {
  await deployContracts();
})().catch((err) => {
  console.error(err);
});
