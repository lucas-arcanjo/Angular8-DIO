import { of } from "rxjs";
import { HeroesComponent } from "./heroes.component"

describe('HeroesCompoment', () => {
    let component;
    let HEROES;
    let mockHeroService;

    beforeEach(() => {
        HEROES = [
            { id: 1, name: 'LaternaVerde', strength: 8 },
            { id: 2, name: 'SuperMan', strength: 10 },
            { id: 3, name: 'Batman', strength: 5 },
        ]
        mockHeroService = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero'])
        component = new HeroesComponent(mockHeroService);
    })

    describe('delete', () => {
        
        it('should remove the indicated hero from the heroes list', () => {
            mockHeroService.deleteHero.and.returnValue(of(true));
            component.heroes = HEROES;
            component.delete(HEROES[2]);

            expect(component.heroes.length).toBe(2);
        })
    })
})