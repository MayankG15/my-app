import React from 'react'
import Script from 'next/script'

const contract = () => {
  return (
    <div>
        <Script>
            {`alert("welcome to contract page")`}
        </Script>
      This is contract
    </div>
  )
}

export default contract

export const metadata = {
    title: "Contract Facebook - Connect With the world",
    description: "This is Contract to Facebook we are connect ot world",
  };