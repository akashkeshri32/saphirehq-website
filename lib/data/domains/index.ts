import { aiMl } from "./ai-ml";
import { backend } from "./backend";
import { businessAnalyst } from "./business-analyst";
import { dataAnalyst } from "./data-analyst";
import { dataScience } from "./data-science";
import { frontEnd } from "./frontend";
import { fullstack } from "./fullstack";
import { uiUx } from "./ui-ux";

const DOMAINS = [
  businessAnalyst,
  dataAnalyst,
  dataScience,
  aiMl,
  uiUx,
  frontEnd,
  backend,
  fullstack,

] as const;

export default DOMAINS

export type DomainData = (typeof DOMAINS)[number];