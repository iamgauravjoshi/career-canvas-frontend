import React from 'react'
import dummy from '../../../data/dummy';

function SummaryPreview({resumeInfo}) {
  return (
    <p className='text-xs'>
        {resumeInfo?.summary || dummy.summary}
    </p>
  )
}

export default SummaryPreview;