import { useSelector } from "react-redux"
import { useTranslation } from "react-i18next"

export default function About() {
  const countState=useSelector((state)=> state.count)
  const {t}=useTranslation()

  return (
    <div className="text-center m-3">
      <h2>{t('About')}</h2>
      {countState}
    </div>
  )
}
