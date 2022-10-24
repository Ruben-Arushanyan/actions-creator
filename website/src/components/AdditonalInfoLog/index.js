import React, {useEffect} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import _once from 'lodash/once'

const logOnce = _once(console.table);

export default function AdditonalInfoLog() {
  const {
    siteConfig: {
      customFields: {
        additonalInfo,
      },
    },
  } = useDocusaurusContext()

  useEffect(() => {
    logOnce(additonalInfo)
  }, [])

  return null
}
