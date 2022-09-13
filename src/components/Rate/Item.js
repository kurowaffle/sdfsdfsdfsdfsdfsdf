const RenderRate = (rateObj, selectedRates) => {
    if (rateObj === null)
        return "";

    return Object.keys(rateObj.rates)
        .filter((rateSymbol) => selectedRates.includes(rateSymbol))
        .map((rateSymbol) => (<tr key={rateSymbol}>
            <td>{rateSymbol}</td>
            <td>{(parseFloat(rateObj.rates[rateSymbol]) + (parseFloat(rateObj.rates[rateSymbol]) * 0.05))}</td>
            <td>{rateObj.rates[rateSymbol]}</td>
            <td>{(parseFloat(rateObj.rates[rateSymbol]) - (parseFloat(rateObj.rates[rateSymbol]) * 0.05))}</td>
        </tr>));
};

const Main = (props) => {
    return (
        RenderRate(props.rateData, props.selectedRates)
    );
}

export default Main;