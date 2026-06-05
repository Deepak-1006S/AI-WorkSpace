import { describe, it, expect } from 'vitest'
import { predict } from '../services/mockModel'

describe('mockModel.predict', () => {
  it('returns expected shape', async () => {
    const res = await predict('hello world')
    expect(res).toHaveProperty('input_preview')
    expect(res).toHaveProperty('tokens')
    expect(res).toHaveProperty('top_label')
    expect(res).toHaveProperty('confidence')
  })
})
