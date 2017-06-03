import { ISommelier } from './sommelier';

export class SommelierPeppe
    implements ISommelier {

    consigliaVino() {
        return 'champagne';
    }

}