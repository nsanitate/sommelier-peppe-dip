import { ISommelier } from './sommelier';

export class Chef {

    constructor(
        private sommelier: ISommelier
    ) { }

    chiediConsiglioSulVino() {
        return this.sommelier.consigliaVino();
    }

}