import { ISommelier } from './sommelier';

export class SommelierNicola
    implements ISommelier {

    consigliaVinoScadente() {
        return 'moscato';
    }

    consigliaVino() {
        return this.consigliaVinoScadente();
    }

}