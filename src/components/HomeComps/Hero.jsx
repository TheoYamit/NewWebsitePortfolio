import HeroPic from '../../assets/Pics/HeroPic.jpeg'
export function HeroHome() {
  return (
    <>
      <div className="flex sm:flex-col sm:justify-center sm:items-center md:flex-row p-10">
        <div className="flex flex-col gap-10 md:w-1/2 justify-center"> 
          <div className="flex flex-col justify-center sm:text-center md:text-left">
            <div className="text-6xl">My name is</div>
            <div className="font-proximaBold text-7xl">Theodore Yamit</div>
            <div className="text-lg">I am someone interested in both Artificial Intelligence and Medicine</div>
          </div>
        </div>
        <div className="flex justify-center md:w-1/2">
          <img className="sm:w w-full" src={HeroPic}/>
        </div>
      </div>
    </>
  )
}