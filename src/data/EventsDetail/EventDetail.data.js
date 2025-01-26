import { abCentral } from "./abcentral/abcentral,js";
import { crescendo } from "./crescendo/crescendo";
import { dtaraxia } from "./dtaraxia/dtaraxia";
import { estoria } from "./estoria/estoria";
import { mun } from "./orator/mun";
import { probe } from "./probe/probe";

export const eventDetailData = {
    ...estoria,
    ...probe,
    mun,
    ...dtaraxia,
    ...crescendo,
    ...abCentral
};
