import React, { useState } from 'react';
import checkHex, { hex2rgb } from '../utils';

export default function Colors() {
  const [color, setColor] = useState({ hex: '', rgb: '' })

    const [form, setForm]= useState({
    name:''})
    const handleChange=({target})=>{
        const{name, value}=target;
        setForm(prevForm=>({...prevForm, [name]:value}))
        if(value.length===7){
            if(checkHex(value)){
                const color=hex2rgb(value);
                setColor({hex:value, rgb:color});
            }
            else{
                setColor({hex:"error", rgb:"ОШИБКА!"})
            }
        }
        }
    const handleSubmit=(evt)=>{
        evt.preventsDefault();
        console.log(evt.target)
    }

    const styleColor = () => {
        if(color.hex==="error") {
            return {backgroundColor:"#FF851B"}
        }else if(color.hex===""){
            return {backgroundColor:"#34495e"}
        }
        else{ 
            return {backgroundColor: color.hex}
        }
    }
  return (
    <div style={styleColor()} className='container'>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name"></label>
        <input id="name"  name="name" className="input" value={form.name} onChange={handleChange} maxlength="7">
        </input>
      </form>
      <div className="box">
        {color.rgb}
      </div>
    </div>
  );
}