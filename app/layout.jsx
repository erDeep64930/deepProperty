
import "@/assets/styles/global.css"

import Navbar from "@/components/Navbar"


export const metadata = {
    title:"DeepProperty | find the perfect rental property" ,
    description : "find your drem rental property"
}
const MainLayout = ({children}) => {
  return (
    <html>
        <body lang='en'>
            <Navbar />
        <main>
        
            {children}
        </main>
        </body>
  
    </html>
 
  )
}

export default MainLayout
