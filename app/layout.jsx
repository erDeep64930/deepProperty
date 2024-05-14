
import "@/assets/styles/globals.css"


export const metadata = {
    title:"DeepProperty | find the perfect rental property" ,
    description : "find your drem rental property"
}
const MainLayout = ({children}) => {
  return (
    <html>
        <body lang='en'>
        <div>
            {children}
        </div>
        </body>
  
    </html>
 
  )
}

export default MainLayout
