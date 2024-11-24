import React from 'react'
import { IntlProvider } from 'react-intl';
import messages from './routes/messages'
import { useSelector } from 'react-redux';

function IntelProvider({children}) {
  const language = useSelector(state => state.lang.language)
  console.log(language)
  document.documentElement.dir=language==='ar'?'rtl' : 'ltr'
  document.documentElement.lang=language
  return (
    <IntlProvider locale={language} messages={messages[language]} >

      {children}
      
      </IntlProvider >

  )
}

export default IntelProvider
