import React, { useEffect, useState } from 'react'
import "./KeyWord.css"
import Table from '../../Component/Table/Table'

function KeyWord() {
    const [searchValue, setsearchValue] = useState("")
    const [saveval, setsaveval] = useState([])
    function filterdata(event) {
        console.log(event.target.value)
        setsearchValue(event.target.value)
    }
    useEffect(() => {
        let savedFilterValue = localStorage.getItem('filterValue')
        setsaveval(JSON.parse(savedFilterValue))
    }, [])

    function setChip(event) {
        if (event.key === 'Enter' && saveval.length < 3) {
            setsaveval([...saveval, searchValue]);
            setsearchValue("")
        }
    }
    function save(e) {
        localStorage.setItem('filterValue', JSON.stringify(saveval))
    }

    function cancel(idx) {
        let arrdata = [...saveval];
        arrdata.forEach((e, index) => {
            if (index === idx) {
                arrdata.splice(idx, 1);
            }
            setsaveval(arrdata);
        })
    }
    return (
        <div className="keyword keyword_mob-v">
            <h1>Add Another Key<span className="chipNo">{saveval.length}/3</span> UPGRADE</h1>
            <div>
                {saveval.map((val, index) => {
                    return (

                        <div className="chips" id={index}>
                            <span>{val}</span>
                            <span class="material-icons closebtn" onClick={() => cancel(index)}>cancel</span>
                        </div>
                    )
                })
                }
            </div>

            <span className="search"><span class="material-icons ">search</span></span>
            <input type="text" value={searchValue} placeholder="Enter here filter yours" onKeyPress={setChip} onChange={filterdata} className="searchFilter searchFilter_mob-v" />
            <button className="btn-save" onClick={save}>SAVE FILTERS</button>
            <div className="table table_mob-v">
                <Table filterCriteria={saveval} />
            </div>
        </div>
    )
}

export default KeyWord
