import {useEffect, useRef, useState} from 'react';
import useOutsideClick from "../Hooks/useOutsideClick.js";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";
import {format} from "date-fns";
import {MdLocationOn} from 'react-icons/md'
import {HiCalendar, HiSearch} from "react-icons/hi";
import {createSearchParams, useNavigate, useSearchParams} from "react-router-dom";


const Header = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const [destination, setDestination] = useState(searchParams.get('destination' ) || '');
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const [option, setOption] = useState({
        adult: 1,
        children: 0,
        room: 0,
    })
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key:'selection'
        }
        
    ])
    const [openDate, setOpenDate] = useState(false)


    const handleOption = (name, operation) => {
        setOption((prev) => {
            return {
                ...prev,
                [name]: operation === 'inc' ? option[name] + 1 : option[name] - 1
            }

        })
    }

    const handleSearch = () => {
        const encodedParams = createSearchParams({
            destination,
            option: JSON.stringify(option),
        })

        navigate({
            pathname: "/hotels",
            search: encodedParams.toString(),
        })
    }



    return (
        <header className="header">
            <button className={'heder__bookmarks'}>bookmark</button>
            <div className={'header__navbar'}>
                <div className="header__search">
                    <MdLocationOn className={'header__Location-icon'} /> <input className={'header__input border-r'} name={'destination'} id={'destination'} placeholder={' where to go?'} onChange={(e) => setDestination(e.target.value)} value={destination}/>
                </div>
                <div  className={'header__date border-r'} onClick={() => setOpenDate(true)}>
                    <HiCalendar className={'header__date-icon'}/>
                    <p>{`${format(date[0].startDate,'MM/dd/yyyy')} to ${format(date[0].startDate,'MM/dd/yyyy')}`}</p>
                    {openDate && <DateRange onChange={item=> setDate([item.selection])} ranges={date} minDate={new Date()} className={'DateRange'}  />}
                </div>

                <div onClick={() => setShow(true)} className={'header__option border-r'}>
                    {option.adult} adult • {option.children} children • {option.room} room
                    {show && <Modal_filter option={option} handleOption={handleOption} setShow={setShow}/>}
                </div>
                <button onClick={handleSearch} className={'header__search-btn'}><HiSearch className={'header__search-icon'}/></button>
            </div>
            <button className={'header__login'}>login</button>

        </header>
    );
};

export default Header;

function Modal_filter({option, handleOption , setShow}) {

    const optionRef = useRef();
    useOutsideClick(optionRef , 'header__option' , ()=>setShow(false));

    return (
        <div className={'Modal-filter'} ref={optionRef}>
            <Modal_items type={'adult'} minLimit={1} option={option} handleOption={handleOption}/>
            <Modal_items type={'children'} minLimit={0} option={option} handleOption={handleOption}/>
            <Modal_items type={'room'} minLimit={1} option={option} handleOption={handleOption}/>
        </div>
    )
}

function Modal_items({type, minLimit, option, handleOption}) {
    return (
        <div className={'modal-filter__item'}>
            <p>{type}</p>
            <div className={'modal-filter__nums'}>
                <button onClick={() => handleOption(type, 'dec')} disabled={option[type] <= minLimit}>-</button>
                <span>{option[type]}</span>
                <button onClick={() => handleOption(type, 'inc')}>+</button>
            </div>

        </div>
    )
}

