import { randomBytes } from 'crypto'

// Excludes visually ambiguous characters: 0 O 1 l I
const CHARSET = 'ABCDEFGHJKMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789'

export function generateShortCode(length = 8): string {
  return Array.from(randomBytes(length), (b) => CHARSET[b % CHARSET.length]).join('')
}
