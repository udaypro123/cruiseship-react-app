
const SearchForm = ({setOption}) => {
  
  return (
    <>
      <div className='searchform'>
        <div className='searchfilter'>
          <select onChange={ (e) => {
            setOption(e.target.value)
          
          } }>
            <option value=" " > ---Choose by Category--</option>
            
            <option value="BirthdayParties" >  Birthday Parties</option>
            <option value='BridalShowers' >Bridal Showers</option>
            <option value='WeddingAnniversaries' > Wedding Anniversaries</option>
            <option value="CorporateEvents" > Corporate Events</option>
            <option value='babyshower' >Baby Showers</option>
            <option value='Seminars' > Seminars</option>
            <option value="BacheloretteParties" > Bachelorette Parties</option>
            <option value="KittyParties" > Kitty Parties</option>
           
          </select>
        </div>
      
      </div>
    </>
  )
}

export default SearchForm
