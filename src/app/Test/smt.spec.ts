import {Smt} from "../Class/smt";


describe('SMT testing', () => {

  let smt: Smt;
  beforeEach(() => {
    smt = new Smt('SMT', 40, 2000);
  })

  it('should create', () => {
    expect(() => new Smt('SMT', 1000, 1000)).toBeTruthy();
  })

  it('No name', () => {
    expect(() => new Smt('', 1000, 10000)).toThrow(new Error('Please enter name'));
  })

  it('Small population', () => {
    expect(() => new Smt('SMT', 1000, 1)).toThrow(new Error('not an smt (1000 < population < 5000)'));
  })

  it('Big population', () => {
    expect(() => new Smt('SMT', 1000, 5001)).toThrow(new Error('not an smt (1000 < population < 5000)'));
  })

  it('Negative population', () => {
    expect(() => new Smt('SMT', 1000, -1)).toThrow(new Error('population undefined or <= 0'));
  })

  it('density()', () => {
    expect(smt.density()).toEqual(50);
  })

  it('show()', () => {
    expect(smt.show()).toEqual(smt.name + '\n'
      + '\t' + "Площа: " + 40 + '\n'
      + '\t' + "Населення: " + 2000 + '\n'
      + '\t' + "Щільність: " + 50 + '\n')
  })
})
