import React from 'react';
import PropTypes from 'prop-types';

export const MIN_RATE = 0;
export const MAX_RATE = 20;

/**
 * Generates an array filled with a range of numbers.
 */
const buildRateArray = () => new Array(MAX_RATE - (MIN_RATE - 1)).fill().map((d, i) => MIN_RATE + i);

export default function SelectInterestRate({ id, value, onChange, label, placeholder }) {
    return (
        <label className="input-select">
            {value !== 0 && <span className="label-filled">{label}</span>}
            <select id={id} className="input input--border-bottom" onChange={onChange} defaultValue={-1}>
                <option value="-1" className="hidden">{placeholder}</option>
                {buildRateArray().map((rate) => <option key={rate} value={rate}>{rate}%</option>)}
            </select>
        </label>
    );
}

SelectInterestRate.propTypes = {
		/**
     * The select html id
     */
    id: PropTypes.string.isRequired,
    /**
     * How much the Savings Pot increases per year, expressed as a percentage .
     * This allows for modelling of growth.
     */
    value: PropTypes.number.isRequired,
    /**
     * Event listener for updating the value
     */
		onChange: PropTypes.func.isRequired,
		/**
     * The select's label text
     */
		label: PropTypes.string,
		/**
     * The select placeholder text
     */
    placeholder: PropTypes.string
}

SelectInterestRate.defaultProps = {
		value: 0,
		onChange: () => null
}