import React from 'react'

function SearchBox({ onSearch }) {
  return (
    <div className='search-box'>
      <input type="text" id="cityInput" placeholder='City name'/>
      <button onClick={()=>{
        let city = document.getElementById("cityInput").value;
        if(!city) return;
        onSearch(city);
        document.getElementById("cityInput").value = "";
      }}>Search 🔍
      </button>
    </div>
  )
}

export default SearchBox;
