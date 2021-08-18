import Home from '@/views/Home.vue'
import faker from 'faker'

const valueHasBetweenWithTolerance = Home.methods.valueHasBetweenWithTolerance

describe('Validations Home functions with numbers fixed', () => {
  const minValue = 3
  const maxValue = 5
  it('Value not has between with tolerance', () => {
    const valueEntry = 4
    const tolerance = 2
    expect(valueHasBetweenWithTolerance(valueEntry, minValue, maxValue, tolerance)).toBe(false)
  })
  it('Value not has between without tolerance', () => {
    const valueEntry = 2
    const tolerance = 0
    expect(valueHasBetweenWithTolerance(valueEntry, minValue, maxValue, tolerance)).toBe(false)
  })
  it('Value has between with tolerance', () => {
    const valueEntry = 4
    const tolerance = 1
    expect(valueHasBetweenWithTolerance(valueEntry, minValue, maxValue, tolerance)).toBe(true)
  })
  it('Value has between without tolerance', () => {
    const valueEntry = 4
    const tolerance = 0
    expect(valueHasBetweenWithTolerance(valueEntry, minValue,  maxValue, tolerance)).toBe(true)
  })
 
})
describe('Validations Home functions with numbers faker', () => {
  it('Value not has between with tolerance', () => {
    const minValue = faker.datatype.number({ min: 10, max: 500 })
    const maxValue = faker.datatype.number({ min: 501, max: 1000 })
    const tolerance = faker.datatype.number()
    const valueEntry = minValue + (maxValue - minValue) + tolerance


    expect(valueHasBetweenWithTolerance(valueEntry, minValue, maxValue, tolerance)).toBe(false)
  })
  it('Value not has between without tolerance', () => {
    const minValue = faker.datatype.number({ min: 10, max: 500 })
    const maxValue = faker.datatype.number({ min: 501, max: 1000 })
    const tolerance = 0
    const valueEntry = minValue + 1 + (maxValue - minValue) + tolerance


    expect(valueHasBetweenWithTolerance(valueEntry, minValue, maxValue, tolerance)).toBe(false)
  })
  it('Value has between with tolerance', () => {
    const minValue = faker.datatype.number({ min: 10, max: 500 })
    const maxValue = faker.datatype.number({ min: 501, max: 1000 })
    const tolerance = faker.datatype.number({ min: 1, max: (maxValue - minValue) / 2 })
    const valueEntry = minValue + tolerance

    expect(valueHasBetweenWithTolerance(valueEntry, minValue, maxValue, tolerance)).toBe(true)
  })
  it('Value has between without tolerance', () => {
    const minValue = faker.datatype.number({ min: 10, max: 500 })
    const maxValue = faker.datatype.number({ min: 501, max: 1000 })
    const tolerance = 0 
    const valueEntry = minValue + (maxValue - minValue) + tolerance


    expect(valueHasBetweenWithTolerance(valueEntry, minValue, maxValue, tolerance)).toBe(true)
  })
 
})
