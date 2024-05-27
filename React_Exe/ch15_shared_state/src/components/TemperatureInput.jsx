
const scaleNames = {
    c : '섭씨',
    f: '화씨'
};

function TemperatureInput(props){

    const {scale, temperature, onTemperatureChange} = props;

    const handleChange = (event) => {
        onTemperatureChange(event.target.value);
    }
    return (
        <fieldset>
            <legend>
                온도 입력(단위: {scaleNames[scale]})
            </legend>
            <input value={temperature} onChange={handleChange} />
        </fieldset>
    )
}

export default TemperatureInput;
