import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../actions/index';
import Data from '../data.json';
import New from './New';

const SearchBar = () => {
    const [search_key, setSearch_key] = useState("")
    const [data, setData] = useState([])
    const [name, setName] = useState([]);
    const [show, setShow] = useState(true);

    const dataName = useSelector(state => state.search);

    const dispatch = useDispatch();

    const search = (key) => {
        const resultName = Data.map((ele) => ele.name);
        setName(resultName);
        if (key.length === 0) {
            setData([])
            setSearch_key('')
        } else {
            const searchedObjects = []
            Data.forEach((allData) => {
                Object.values(allData).every((onlyNames) => {
                    if (onlyNames.toLowerCase().includes(key.toLowerCase())) {
                        searchedObjects.push(allData)
                        return;
                    }
                })
            })
            setSearch_key(key);
            setData(searchedObjects)
        }
    }

    const res = (e) => {
        const ind = name.findIndex(resName => resName === e);
        const ob = Data[ind]
        setData([])
        setSearch_key(e)
        dispatch(add(ob))
        setShow(false);
    }
    return (
        <div>
            <h1>SearchBox</h1>
            <br />
            <input type="text"
                value={search_key}
                onChange={(e) => search(e.target.value)}
                className="form-control"
                placeholder="Search here..."
            />
            {data.map((data, i) =>
                <div key={i}>
                    <input type="text" value={data.name} onClick={(e) => res(e.target.value)} />
                </div>
            )}
            <div>
                {show ? "" : <New />}
            </div>
        </div>
    )
}

export default SearchBar;