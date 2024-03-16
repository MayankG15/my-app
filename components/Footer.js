import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="flex justify-around bg-slate-800 text-white py-4 text-xs">
        <div className="text-center">Copyright Facebook | All right reserved</div>
        <ul className="flex gap-2 text-sm">
            <a href="/"><li className="text-xs">Home</li></a>
            <a href="./about"><li className="text-xs">About</li></a>
            <a href="./contract"><li className="text-xs">Contract</li></a>
        </ul>
      </footer>
    </div>
  )
}

export default Footer
