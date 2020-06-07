import React, {useState} from 'react';
import RestResult from "../RestResult";
import axios from 'axios'

function APICallData() {

    const [contactsFetch, setcontactsFetch] = useState([]);
    const [contactsAxios, setContactsAxios] = useState([]);

    function getFromFetch() {
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then((data) => {
                setcontactsFetch( data );
    })
            .catch(console.log)};

    function getFromAxios() {
        const apiUrl = 'http://jsonplaceholder.typicode.com/users';
        axios.get(apiUrl).then((repos) => {
            setContactsAxios(repos.data);
        });
    };

        return (
            <div>

                <div className="container">

                    <div className="col ">
                        <button onClick={getFromFetch}>Show contacts (Fetch) </button>
                        <div className="row mt-5">
                            <RestResult contacts={contactsFetch}></RestResult>
                        </div>
                    </div>
                    <div className="col">
                        <button onClick={getFromAxios}>Show contacts (Axios) </button>
                        <div className="row mt-5">
                            <RestResult contacts={contactsAxios}></RestResult>
                        </div>

                    </div>
                </div>
            </div>
        );
}

export default APICallData;
