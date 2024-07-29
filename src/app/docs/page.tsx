'use client'
function randomNum(count: number) {
  return Math.floor(Math.random() * count);
}


const Docs = () => {
  const random: number = randomNum(2)
  if (random === 1) {
throw new Error('Error Loading')
}
  return (
  <div>
    <h1>Docs Number</h1> 
    <h1>{random}</h1> 

  </div>

  )
}

export default Docs