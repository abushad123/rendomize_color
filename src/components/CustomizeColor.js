import Title from './Title';


function CustomizeColor() {
    function handleColor(e){
        let body = document.querySelector('body');
        body.style.backgroundColor = getRandomColor();
        e.target.style.backgroundColor = getRandomColor();
    }

    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }

  return (
    <div className="flex  flex-col py-5">
        <div>
             <Title text="customized" />
        </div>
        <div className='flex justify-center  py-5'>
        <button type="button" className="bg-indigo-500 px-2 pb-1 rounded-md text-white me-2" onClick={handleColor}>Click me</button>
            <button type="button" className="bg-sky-500 px-2 pb-1 rounded-md text-white me-2" onClick={handleColor}>Check me</button>
            <button type="button" className="bg-red-500 px-2 pb-1 rounded-md text-white me-2" onClick={handleColor}>Visit me</button>
            <button type="button" className="bg-amber-400 px-2 pb-1 rounded-md text-white me-2" onClick={handleColor}>Explore me</button>
        </div>
    </div>
  );
}

export default CustomizeColor;
