import './GamingLibrary.css'
import {GamingLibaryCard,SectionHeader,SectionWrapper} from '../../components/index'
import GamingLibaryData from '../../Data/GamingLibaryData'
const GamingLibrary = () => {
    const cards=GamingLibaryData.map(card=>{
        return <GamingLibaryCard key={card.id} image={card.image} title={card.title} category={card.category} date_added={card.date_added} hours_played={card.hours_played} download={card.download}/>
      })
  return (
    <>
    <SectionWrapper>
    <SectionHeader>Gaming Library</SectionHeader>
          <div className="gaming-library-cards">
         {cards}
         
          </div >
         </SectionWrapper>
  </>
  )
}

export default GamingLibrary