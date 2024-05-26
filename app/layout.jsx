
import "@/assets/styles/global.css"
import Footer from "@/components/Footer"

import Navbar from "@/components/Navbar"


export const metadata = {
    title:"DeepProperty | find the perfect rental property" ,
    description : "find your dream rental property"
}
const MainLayout = ({children}) => {
  return (
    <html charSet="utf-8">
        <body lang='en'>
            <Navbar />
        <main>
        
            {children}
        </main>
        <Footer />
        </body>
  
    </html>
 
  )
}

export default MainLayout
