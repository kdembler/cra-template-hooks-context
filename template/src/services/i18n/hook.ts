import { useTranslation as useTranslationI18n } from 'react-i18next'
import { TranslationKeys } from 'services/i18n/index'
import { StringMap, TOptions } from 'i18next'

export const useTranslation = (ns?: string | string[]) => {
  const { t: untypedT, ...rest } = useTranslationI18n(ns)

  const t = untypedT as (key: TranslationKeys, options?: TOptions<StringMap> | string) => string
  return {
    t,
    ...rest,
  }
}
