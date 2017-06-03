import { expect } from 'chai';

import { Chef } from './chef';
import { SommelierPeppe } from './sommelier-peppe';
import { SommelierNicola } from './sommelier-nicola';

describe('Chef', () => {

    it('dovrebbe ricevere consigli sul vino da Peppe', () => {
        // Arrange
        const sommelier = new SommelierPeppe();
        const chef = new Chef(sommelier);

        // Act
        let actual = chef.chiediConsiglioSulVino();

        // Assert
        expect(actual).to.equal('champagne');
    });

    it('dovrebbe ricevere consigli sul vino da Nicola', () => {
        // Arrange
        const sommelier = new SommelierNicola();
        const chef = new Chef(sommelier);

        // Act
        let actual = chef.chiediConsiglioSulVino();

        // Assert
        expect(actual).to.equal('moscato');
    });

});