const React = require('react')

const WordRelay = () => {
  const [word, setWord] = React.useState('성준');
  const [value, setValue] = React.useState('');
  const [result, setResult] = React.useState('');
  const inputRef = React.useRef(null);

  const onSubmitForm = (e) => {
    e.preventDefault()
    if(word[word.length -1] === value[0]) {
      setResult('딩동댕')
      setWord(value)
      setValue('')
      inputRef.current.focus()
    } else {
      setResult('땡')
      setValue('')
      inputRef.current.focus()
    }
  }

  const onChangeInput = (e) => {
    setValue(e.target.value )
  }

  return (
    <>
      <div>{word}</div>
      <form onSubmit={onSubmitForm}>
        <input ref={inputRef} value={value} onChange={onChangeInput} />
        <button>입력</button>
      </form>
      <div>{result}</div>
    </>
  )
}

module.exports = WordRelay