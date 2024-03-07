import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import Page,{kakezan} from './index'

test('kakezanのテスト', () => {
  expect(kakezan(1, 2)).toBe(2)
})

test('vitestとtestingライブラリの初歩のテスト', () => {
  render(<Page />)
  expect(screen.getByRole('heading', { level: 1, name: 'Home' })).toBeDefined()
})

