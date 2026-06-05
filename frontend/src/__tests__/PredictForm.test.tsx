import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { it, expect, vi } from 'vitest'
import PredictForm from '../components/PredictForm'

it('submits input', () => {
  const onPredict = vi.fn()
  const { getByPlaceholderText, getByText } = render(
    <PredictForm onPredict={onPredict} loading={false} />
  )
  const input = getByPlaceholderText('Enter text or JSON for the demo model') as HTMLTextAreaElement
  fireEvent.change(input, { target: { value: 'test input' } })
  fireEvent.click(getByText('Predict'))
  expect(onPredict).toHaveBeenCalled()
})
