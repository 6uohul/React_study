import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setkeyword] = useState("");
  const onClick = () => setValue((prev) => prev +1);
  const onChange = (event) => setkeyword(event.target.value);
  useEffect(() => {
    console.log("Only one time");
  }, []);
  useEffect(() => {
    console.log("Only counter changes");
  }, [counter]);
  useEffect(() => {
    if(keyword !== "" && keyword.length > 5){
      console.log("Only keyword changes");
    }
  }, [keyword]); // keyword가 변화될 때
  useEffect(() => {
    console.log("keyword & counter change");
  }, [keyword, counter]);
  // useEffect(function (){
  //}) "() =>" 와 같은 표현임
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange} 
        type="text" 
        placeholder="Search here...">
      </input>
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;
