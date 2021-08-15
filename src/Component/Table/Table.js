import axios from 'axios'
import React, { useState, useEffect } from 'react'
import "./Table.css"

function Table({ filterCriteria }) {
    const [trackingdata, settrackingdata] = useState([])
    const [tmp, setTmp] = useState([])
    useEffect(() => {
        async function tabledata() {
            let apiobj = await axios.get("https://raw.githubusercontent.com/akshita151199/Termmonitor-APIs/main/dashboard")
            settrackingdata(apiobj.data.data);
            setTmp(apiobj.data.data)
            if (filterCriteria.length) {
                let mappedData = filterCriteria.map(el => el.toLowerCase())
                let filteredData = trackingdata.filter(el => {
                    return mappedData.includes(el.keyword.toLowerCase())
                });
                settrackingdata(filteredData)
            }
        }

        tabledata();
    }, [])
    useEffect(() => {
        if (filterCriteria.length) {
            let mappedData = filterCriteria.map(el => el.toLowerCase())
            let filteredData = trackingdata.filter(el => {
                return mappedData.includes(el.keyword.toLowerCase())
            });
            settrackingdata(filteredData)
        } else {
            console.log(tmp)
            settrackingdata(tmp)
        }
    }, [filterCriteria])
    function deleteId(id) {
        let data = [...trackingdata];
        data.forEach((ele, index) => {
            if (ele.id === id)
                data.splice(index, 1);
        })
        settrackingdata(data);
    }

    console.log(filterCriteria)
    return (
        <div className="table_container">
            <div className="table_title">
                <h2>The terms you are tracking</h2>
                <h4>The data will refresh every 5 min</h4>
            </div>
            <table>
                <tr>
                    <th>Keywords</th>
                    <th></th>
                    <th>Goal</th>
                    <th>Matchs</th>
                    <th>Search Status</th>
                    <th>Delete Keyword</th>
                </tr>
                {
                    trackingdata.map((el) => {
                        return (
                            <tr id={el.id}>
                                <td>{el.keyword}</td>
                                <td><span class="material-icons">search</span></td>
                                <td>{el.goal}</td>
                                <td>{el.matches}</td>
                                <td>{el.search_status}</td>
                                <td><span class="material-icons delete" onClick={() => deleteId(el.id)}>delete</span></td>
                            </tr>
                        )
                    })
                }
            </table>
        </div>
    )
}

export default Table
