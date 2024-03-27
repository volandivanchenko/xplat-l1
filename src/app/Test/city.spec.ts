import {City} from "../Class/city";


describe('City testing', () => {
  let city: City;

  beforeEach(() => {
    city = new City('City', 1000, 10000)
  })

  it('should create', () => {
    expect(city).toBeTruthy();
  })

  it('No name', () => {
    expect(() => new City('', 1000, 10000)).toThrow(new Error('Please enter name'));
  })

  it('Small population', () => {
    expect(() => new City('City', 1000, 1000)).toThrow(new Error('population < 5000'));
  })

  it('No population', () => {
    expect(() => new City('City', 1000, -13)).toThrow(new Error('population undefined or <= 0'));
  })
})
