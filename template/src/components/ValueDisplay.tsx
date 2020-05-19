import React from 'react'
import { Typography } from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import { useStore } from 'services/store/hook'

const ValueDisplay: React.FC = () => {
  const { t } = useTranslation()
  const { value } = useStore()
  return <Typography variant="body1">{t('currentValue', { value })}</Typography>
}

export default ValueDisplay
