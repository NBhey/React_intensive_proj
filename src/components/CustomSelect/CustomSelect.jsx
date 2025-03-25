import React, {useState} from 'react';
import down from '../../assets/images/down.svg';
import './customSelect.css';
function CustomSelect({labels, onSelect}) {
    const [isOpen, setIsOpen]=useState(false);
    const [selectOption, setSelectOption]=useState(labels[0].label)
    const toggleDrop=()=>{
        setIsOpen(!isOpen);
    }
    const onSelectOption=(option)=>{
        setSelectOption(option.label);
        onSelect(option.parametr);
    }
    //хроним состояние компонента тут и в серче-редакс
    return (
        <div className='customSelect' onClick={toggleDrop}>
            <div className='customSelect_container'>
            <span className='select_title'>{selectOption}</span>
            <span><img src={down} alt="down" /></span>
            </div>
            {isOpen && (
                <ul className='customSelect_list'>
                {labels.map((item)=>(
                    <li key={item.label} className='list-item' onClick={()=>onSelectOption(item)}>{item.label}</li>
                ))}
            </ul>
            )}
        </div>
    );
}

export default CustomSelect;