import { expect, test } from 'vitest'
import { encrypt, decrypt } from './lib/caesarCipher'

test('encrypt correctly shifts text', () => {
  expect(encrypt('hello', 3)).toBe('khoor')
})

test('decrypt correctly shifts text back', () => {
  expect(decrypt('khoor', 3)).toBe('hello')
})

test('encrypt preserves case and non-alphabetic characters', () => {
  expect(encrypt('Hello, World! 123', 1)).toBe('Ifmmp, Xpsme! 123')
})

test('decrypt preserves case and non-alphabetic characters', () => {
  expect(decrypt('Ifmmp, Xpsme! 123', 1)).toBe('Hello, World! 123')
})