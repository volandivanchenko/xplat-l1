import {Village} from "../Class/village";
import {Smt} from "../Class/smt";


describe('Village testing', () => {

  let village: Village;
  beforeEach(() => {
    village = new Village('Village', 20, 10, 3);
  })

  it('should create', () => {
    expect(village).toBeTruthy();
  })

  it('No name', () => {
    expect(() => new Village('', 20, 10, 3)).toThrow(new Error('Please enter name'));
  })

  it('Negative house_num', () => {
    expect(() => new Village('Village', 20, -1, 3)).toThrow(new Error('house_num <= 0'));
  })

  it('Negative pph', () => {
    expect(() => new Village('Village', 20, 1000, -3)).toThrow(new Error('pph <= 0'));
  })

  it('Big population', () => {
    expect(() => new Village('Village', 20, 1, 5001)).toThrow(new Error('population > 1000'));
  })

  it('density()', () => {
    expect(village.density()).toEqual(1.5);
  })

  it('show()', () => {
    expect(village.show()).toEqual("Village" + '\n'
      + '\t' + "Площа: " + "20" + '\n'
      + '\t' + "Будинків: " + "10" + '\n'
      + '\t' + "Ос./Буд.: " + "3" + '\n'
      + '\t' + "Населення: " + "30" + '\n'
      + '\t' + "Щільність: " + "1.5" + '\n')
  })
})
