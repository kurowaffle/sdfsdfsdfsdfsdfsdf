import Axios from 'axios';
import React, { useEffect } from 'react';

import RateItem from './Item';
import Footer from './Footer';
import ApiConfig from '../../config/api';

const Main = () => {
    const [rate, setRateData] = React.useState(null);

    useEffect(() => {
        BindData();
    }, []);

    const BindData = () => {
        Axios.get(ApiConfig.host + '/latest?apikey=' + ApiConfig.apiKey)
            .then((response) => {
                setRateData(response.data);
            })
            .catch(error => console.log(error));
    };

    return (
        <>
            <div className="container h-100">
                <div className="row h-100 justify-content-center align-items-center">
                    <div className="col-md-12">
                        <div className="card mat-shad">
                            <div className="card-body text-center">
                                <div className={(rate === null) ? 'row' : 'row d-none'}>
                                    <div className="col-md-12">
                                        <div className="spinner-border text-primary" role="status"></div>
                                    </div>
                                </div>
                                <div className={(rate === null) ? 'row d-none' : 'row'}>
                                    <div className="col-md-12">
                                        <table className="table table-bordered">
                                            <thead className="thead-dark">
                                                <tr>
                                                    <th>Currency</th>
                                                    <th>We Buy</th>
                                                    <th>Exchanges Rate</th>
                                                    <th>We Sell</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <RateItem rateData={rate} selectedRates={ApiConfig.selectedRates} />
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12"><Footer /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Main;