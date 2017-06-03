import { SommelierPeppe } from './sommelier-peppe';

export class Chef {

    constructor(
        private sommelier: SommelierPeppe
    ) { }

    chiediConsiglioSulVino() {
        return this.sommelier.consigliaVino();
    }

}