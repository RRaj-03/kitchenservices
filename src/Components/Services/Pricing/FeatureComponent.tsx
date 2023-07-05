import React from 'react'

const FeatureComponent = (props:{title:any; feature:any; topindex:any; index:any}) => {
    const {title,feature,topindex,index} = props
  return (
    <p key={title+feature} className="flex items-center text-gray-600 mb-2">
            <span className={"w-4 h-4 mr-2 inline-flex items-center justify-center  text-white rounded-full flex-shrink-0"+(topindex!==index?" bg-gray-300":" bg-indigo-500")}>
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>{feature}
          </p>
  )
}

export default FeatureComponent