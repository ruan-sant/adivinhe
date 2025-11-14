import styles from './styles.module.css'

import { Letter } from '../Letter'

export type UsedLettersProps = {
  letter: string
  correct: boolean
}

type Props = {
  data: UsedLettersProps[]
}

export function UsedLetters({ data }: Props) {
  return (
    <div className={styles.usedLetters}>
      <h5>Letras utilizadas</h5>

      <div>
        {
          data.map(({ letter, correct }) => (
            <Letter key={letter} letter={letter} size='small' color={correct ? 'correct' : 'wrong'}
            />
          ))
        }
      </div>
    </div>
  )
}