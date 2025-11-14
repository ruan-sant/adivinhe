import styles from './styles.module.css'

type Props = {
  letter?: string
  size?: 'default' | 'small'
  color?: 'default' | 'correct' | 'wrong'
}

export function Letter({ letter = '', size = 'default', color = 'default' } : Props) {
  return (
    <div className={`
  ${styles.letter}
  ${size === 'small' && styles.letterSmall}
  ${color === 'correct' && styles.letterCorrect} 
  ${color === 'wrong' && styles.letterWrong}
  `}
  >

      <span>{letter}</span>
    </div>
  )
}